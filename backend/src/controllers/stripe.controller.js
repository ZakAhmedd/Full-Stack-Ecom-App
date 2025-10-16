import dotenv from "dotenv";
dotenv.config();
import Stripe from "stripe";
import Order from "../models/order.model.js";
import User from "../models/user.model.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async (req, res) => {
  try {
    const { cartItems, deliveryInfo } = req.body;
    const { firstName, lastName, email, phone, address } = deliveryInfo;
    const { street, city, state, zipCode, country } = address;

    const existingCustomers = await stripe.customers.list({
      email: email,
      limit: 1,
    });

    let customer;
    if (existingCustomers.data.length > 0) {
      customer = existingCustomers.data[0];
    } else {
      customer = await stripe.customers.create({
        email: email,
      });
    }

    const line_items = cartItems.map((item) => ({
      price_data: {
        currency: "gbp",
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      customer_email: email,
      metadata: {
        cartItems: JSON.stringify(cartItems),
        firstName: deliveryInfo.firstName,
        lastName: deliveryInfo.lastName,
        email: deliveryInfo.email,
        phone: deliveryInfo.phone,
        street: deliveryInfo.address.street,
        city: deliveryInfo.address.city,
        state: deliveryInfo.address.state,
        zipCode: deliveryInfo.address.zipCode,
        country: deliveryInfo.address.country,
      },

      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    res.status(500).json({ error: error.message });
  }
};

export const stripeWebhook = async (req, res) => {
  const sig = req.headers["stripe-signature"];

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // ✅ Handle successful payment
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    let items = [];

    try {
      if (session.metadata?.cartItems) {
        const parsedItems = JSON.parse(session.metadata.cartItems);
        items = parsedItems.map((item) => ({
          name: item.name,
          image: Array.isArray(item.image) ? item.image[0] : item.image,
          price: item.price,
          quantity: item.quantity,
          size: item.size,
        }));
      }
    } catch (err) {
      console.error("⚠️ Failed to parse cartItems:", err.message);
    }

    const deliveryInfo = {
      firstName: session.metadata.firstName,
      lastName: session.metadata.lastName,
      email: session.metadata.email,
      phone: session.metadata.phone,
      address: {
        street: session.metadata.street,
        city: session.metadata.city,
        state: session.metadata.state,
        zipCode: session.metadata.zipCode,
        country: session.metadata.country,
      },
    };

    try {
      const user = await User.findOne({ email: session.customer_email });

      // Save the order in MongoDB
      await Order.create({
        user: user ? user._id : null,
        customerEmail: session.customer_email,
        items,
        deliveryInfo,
        total: session.amount_total / 100,
        currency: session.currency,
        stripeSessionId: session.id,
        status: "paid",
        paidAt: new Date(),
      });

      console.log("✅ Order saved to MongoDB");
    } catch (err) {
      console.error("❌ Error saving order:", err.message);
    }
  }

  res.json({ received: true });
};

import dotenv from "dotenv";
dotenv.config();
import Stripe from "stripe";
import Order from "../models/order.model.js";
import mongoose from "mongoose";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async (req, res) => {
  
  try {
    const { cartItems, deliveryInfo } = req.body;
    const { email } = deliveryInfo;

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

    const totalAmount = parseFloat(
      cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
    );


    const sanitizedItems = cartItems.map(item => ({
      _id: new mongoose.Types.ObjectId(),
      productId: item.productId,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      size: item.size,
      image: Array.isArray(item.image) ? item.image[0] : item.image,
    }));

    const userId = req.user ? req.user._id : null;

    const pendingOrder = await Order.create({
      user: userId,
      customerEmail: email,
      items: sanitizedItems,
      deliveryInfo,
      total: totalAmount,
      currency: "gbp",
      status: "pending",
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      customer_email: email,
      metadata: {
        orderId: pendingOrder._id.toString(),
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
    const orderId = session.metadata.orderId;

    try {
      const order = await Order.findById(orderId);
      if (!order) {
        console.error(`⚠️ Order not found for ID ${orderId}`);
        return res.status(404).send("Order not found");
      }

      if (order.status !== "paid") {
        order.status = "paid";
        order.paidAt = new Date();
        order.stripeSessionId = session.id;
        await order.save();
      }

      console.log("✅ Order marked as paid:", order._id);
    } catch (err) {
      console.error("❌ Error updating order:", err.message);
    }
  }

  res.json({ received: true });
};

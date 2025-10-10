import mongoose from "mongoose";

const OrderItemSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.ObjectId, required: true, ref: 'Product' },
    name: String,
    price: Number,
    quantity: Number,
    size: String,
    image: String,
});

const AddressSchema = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
});

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Order must belong to a User!']
    },
    items: [OrderItemSchema],
    subtotal: Number,
    shippingCost: { type: Number, default: 10 },
    total: Number,
    currency: { type: String, default: 'gbp' },
    shippingAddress: AddressSchema,
    billingAddress: AddressSchema,
    customerEmail: String,
    customerPhone: String,
    status: {
        type: String,
        enum: ['pending','paid','failed','cancelled','fulfilled'],
        default: 'pending'
    },
    stripeSessionId: String,
    stripePaymentIntentId: String,
    createdAt: { type: Date, default: Date.now },
    paidAt: Date,
});

orderSchema.pre(/^find/, function (next) {
    this.populate('user', 'firstName lastName email');
    next();
});

const Order = mongoose.model('Order', orderSchema);

export default Order
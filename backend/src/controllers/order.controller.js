import Order from "../models/order.model.js"

export const getMyOrders = async (req, res) => {
  console.log(req.user)
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const orders = await Order.find({
      $or: [
        { user: req.user._id },
        { customerEmail: req.user.email }
      ]
    })
      .sort({ createdAt: -1 })
      .populate("user", "fullName email");

    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching user orders:", error.message);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("user", "fullName email")

    if (!order) {
      return res.status(404).json({ message: "Order not found" })
    }

    if (order.user && order.user._id.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to view this order" })
    }

    res.status(200).json(order)
  } catch (error) {
    console.error("Error fetching order:", error.message)
    res.status(500).json({ message: "Failed to fetch order" })
  }
}

export const getAllOrders = async (req, res) => {
  try {
    // Optional: restrict this to admin users
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: "Not authorized as admin" })
    }

    const orders = await Order.find()
      .sort({ createdAt: -1 })
      .populate("user", "fullName email")

    res.status(200).json(orders)
  } catch (error) {
    console.error("Error fetching all orders:", error.message)
    res.status(500).json({ message: "Failed to fetch all orders" })
  }
}

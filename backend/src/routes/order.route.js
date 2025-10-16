import express from "express"
import { protectRoute } from "../middleware/auth.middleware.js"
import {
  getMyOrders,
  getOrderById,
  getAllOrders
} from "../controllers/orderController.js"

const router = express.Router()

router.get("/my-orders", protectRoute, getMyOrders)
router.get("/:id", protectRoute, getOrderById)
router.get("/", protectRoute, getAllOrders)

export default router

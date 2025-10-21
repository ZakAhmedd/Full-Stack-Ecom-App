import express from "express";
import upload from "../middleware/upload.middleware.js";
import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/admin.middleware.js";

const router = express.Router();

// ADD ADMIN ONLY MIDDLEWARE

router.get("/", getProducts);
router.post("/", protectRoute, adminOnly, upload.single("image"), createProduct);
router.put("/:id", protectRoute, adminOnly, upload.single("image"), updateProduct);
router.delete("/:id", protectRoute, adminOnly, deleteProduct);

export default router;

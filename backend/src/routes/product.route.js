import express from "express";
import upload from "../middleware/upload.middleware.js";
import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// ADD ADMIN ONLY MIDDLEWARE

router.get("/", getProducts);
router.post("/", protectRoute, upload.single("image"), createProduct);
router.put("/:id", protectRoute, upload.single("image"), updateProduct);
router.delete("/:id", protectRoute, deleteProduct);

export default router;

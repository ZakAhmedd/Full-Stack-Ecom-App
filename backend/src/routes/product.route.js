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

router.get("/", getProducts);
router.post("/", protectRoute, adminOnly, upload.array("images", 4), createProduct);
router.put("/:id", protectRoute, adminOnly, upload.array("images", 4), updateProduct);
router.delete("/:id", protectRoute, adminOnly, deleteProduct);

export default router;

import express from "express";
import upload from "../middleware/upload.middleware.js";
import {
  createProduct,
  getProducts,
  deleteProduct,
} from "../controllers/product.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/admin.middleware.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", protectRoute, adminOnly, upload.array("image", 4), createProduct);
router.delete("/:id", protectRoute, adminOnly, deleteProduct);

export default router;

import express from "express";
import upload from "../middlewares/upload.middleware.js";
import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

// ADD ADMIN ONLY MIDDLEWARE

router.get("/", getProducts);
router.post("/", protectRoute, upload.array("images", 5), createProduct);
router.put("/:id", protectRoute, updateProduct);
router.delete("/:id", protectRoute, deleteProduct);

export default router;

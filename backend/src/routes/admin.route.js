import express from "express";
import { loginAdmin } from "../controllers/admin.controller.js";
import { adminOnly } from "../middleware/admin.middleware.js";

const router = express.Router();

router.post("/login", adminOnly, loginAdmin);

export default router;

import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/product.model.js";
import products from "./frontendProducts.js";

dotenv.config();

const seedProducts = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    // Optional: clear existing products
    await Product.deleteMany();
    console.log("🧹 Cleared old products");

    // Clean up products (remove _id and date)
    const cleanedProducts = products.map(({ _id, date, ...rest }) => rest);

    // Insert cleaned products
    await Product.insertMany(cleanedProducts);
    console.log(`🎉 Imported ${cleanedProducts.length} products successfully!`);

    process.exit();
  } catch (error) {
    console.error("❌ Error seeding products:", error);
    process.exit(1);
  }
};

seedProducts();

import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

const useProductStore = create((set, get) => ({
  products: [],
  loading: false,
  error: null,

  // Get all products
  getProducts: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get("/products");

      set({ products: res.data, loading: false });
    } catch (err) {
      console.error("Failed to fetch products:", err);
      set({ error: err.message, loading: false });
    }
  },

  // Add a new product (for admin use)
  addProduct: async (formData) => {
    try {
      const res = await axiosInstance.post("/products", {
        formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      
      set({ products: [res.data, ...get().products] });
      return res.data;
    } catch (err) {
      console.error("Failed to add product:", err);
      throw err;
    }
  },

  // Delete product
  deleteProduct: async (id) => {
    try {
      await axiosInstance.delete(`/products/${id}`);

      set({ products: get().products.filter((p) => p._id !== id) });
    } catch (err) {
      console.error("Failed to delete product:", err);
      throw err;
    }
  },
}));

export default useProductStore
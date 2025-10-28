import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
const useOrderStore = create((set) => ({
  orders: [],
  loading: false,
  error: null,

  getOrders: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get("/orders");
      
      set({ orders: res.data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
      console.error("Failed to fetch orders:", err);
    }
  },
}));

export default useOrderStore;

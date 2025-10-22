import { create } from "zustand";
import axios from "axios";

const useOrderStore = create((set) => ({
  orders: [],
  loading: false,
  error: null,

  getOrders: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get("http://localhost:5001/api/orders", 
      {
        withCredentials: true,
      });
      set({ orders: res.data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
      console.error("Failed to fetch orders:", err);
    }
  },
}));

export default useOrderStore;

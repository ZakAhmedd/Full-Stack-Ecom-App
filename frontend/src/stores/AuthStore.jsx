import { create } from "zustand";
import { persist } from "zustand/middleware";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,

      login: async (email, password) => {
        try {
          const response = await axiosInstance.post("/auth/login", { email, password });

          const data = response.data;

          toast.success("Logged in successfully!");

          set({ user: data, isLoggedIn: true });
          localStorage.setItem("token", data.token);
        } catch (err) {
          toast.error(err.response?.data?.message || "Login failed");
        }
      },

      adminLogin: async (email, password) => {
        try {
          const response = await axiosInstance.post("/admin/login", { email, password });

          const data = response.data;

          toast.success("Logged in successfully!");

          set({ user: data, isLoggedIn: true });
          localStorage.setItem("token", data.token);
        } catch (err) {
          toast.error(err.response?.data?.message || "Login failed");
        }
      },


      logout: async () => {
        try {
          await axiosInstance.post("/auth/logout");

          set({ user: null, isLoggedIn: false });

          localStorage.removeItem("token");

          toast.success("Logged out successfully!");
        } catch (err) {
          toast.error(err.response?.data?.message || "Logout failed");
        }
      }


  })
))

export default useAuthStore

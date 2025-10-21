import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import toast from "react-hot-toast";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,

      login: async (email, password) => {
        try {
          const response = await axios.post(
            "http://localhost:5001/api/auth/login",
            { email, password },
            {
              withCredentials: true,
            }
          );

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
          const response = await axios.post(
            "http://localhost:5001/api/admin/login",
            { email, password },
            {
              withCredentials: true,
            }
          );

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
          await axios.post("http://localhost:5001/api/auth/logout", {}, {
            withCredentials: true,
          });

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

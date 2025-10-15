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
            { email, password }
          );

          const data = response.data;

          toast.success("Logged in successfully!");

          set({ user: data.user, isLoggedIn: true });
          localStorage.setItem("token", data.token);
        } catch (err) {
          toast.error(err.response?.data?.message || "Login failed");
        }
      },


      logout: () => {
        localStorage.removeItem("token");
        set({ user: null, isLoggedIn: false });
      },
    }),
    {
      name: "auth-storage", // localStorage key
      getStorage: () => localStorage,
    }
  )
);

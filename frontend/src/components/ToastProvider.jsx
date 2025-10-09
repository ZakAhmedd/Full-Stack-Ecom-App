import React from "react"
import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      containerStyle={{
        top: '8rem',
        right: '5rem',
      }}
      toastOptions={{
        duration: 2000,
        style: {
          background: "#1f2937", // gray-800
          color: "#fff",
          borderRadius: "10px",
          padding: "12px 16px",
          fontSize: "15px",
        },
        success: {
          style: {
            background: "#10b981", // green-500
          },
        },
        error: {
          style: {
            background: "#ef4444", // red-500
          },
        },
      }}
    />
  );
};

export default ToastProvider;

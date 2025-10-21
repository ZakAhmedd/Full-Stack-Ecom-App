import React from "react"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import ToastProvider from "../components/ToastProvider";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <ToastProvider />
      <Footer />
    </>
  );
};

export default MainLayout;

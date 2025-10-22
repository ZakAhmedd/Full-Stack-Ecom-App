import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToastProvider from "./components/ToastProvider";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/HomePage";
import Collection from "./pages/CollectionPage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Login from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Cart from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import SuccessPage from "./pages/SuccessPage";
import CancelPage from "./pages/CancelPage";
import OrdersPage from "./pages/OrdersPage";
import Privacy from "./pages/PrivacyPage";
import Terms from "./pages/TermsPage";

import AdminLogin from "./adminPages/LoginPage";
import AddItem from "./adminPages/AddItemPage";
import Products from "./adminPages/ProductsPage";
import Orders from "./adminPages/OrdersPage";

import MainLayout from "./layouts/main.layout";
import AdminLayout from "./layouts/admin.layout";

const App = () => {
  return (
    <Router>

      <ScrollToTop />

      <ToastProvider />

      <Routes>

        {/* Public routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/cancel" element={<CancelPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Route>

        {/* Admin routes */}
        <Route path="/adminLogin" element={<AdminLogin />} />

        <Route element={<AdminLayout />}>
          <Route path="/admin/addItem" element={<AddItem />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/orders" element={<Orders />} />
        </Route>

      </Routes>
    </Router>
  );
};

export default App;

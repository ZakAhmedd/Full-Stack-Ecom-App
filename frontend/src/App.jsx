import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ToastProvider from './components/ToastProvider'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Collection from './pages/CollectionPage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import AdminPanel from './pages/AdminPage';
import Login from './pages/LoginPage';
import Cart from './pages/CartPage';
import Privacy from './pages/PrivacyPage';
import Terms from './pages/TermsPage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage'
import SuccessPage from './pages/SuccessPage';
import CancelPage from './pages/CancelPage'

const App = () => {
  return (

    <Router>

      <ScrollToTop />

      <Navbar />
      
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />

        <Route path="/product/:id" element={<ProductPage />} />

        <Route path="/checkout" element={<CheckoutPage />} />

        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancel" element={<CancelPage />} />

      </Routes>

      <ToastProvider />

      <Footer />
      
    </Router>

  )
}

export default App
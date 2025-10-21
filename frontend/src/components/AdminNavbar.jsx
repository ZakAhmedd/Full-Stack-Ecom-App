import React from 'react'
import { useNavigate } from "react-router-dom";
import logo from "../assets/admin_assets/logo.png"
import useAuthStore from "../stores/authStore"

const AdminNavbar = () => {

  const { logout } = useAuthStore();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
    navigate("/")
  };

  return (
    <header className="w-full flex justify-between items-center px-15 py-5 border-b border-gray-200">
      <img src={logo} alt="logo" className="w-40" />
      <button onClick={handleLogout} className="bg-black text-white px-6 py-2 rounded-full">
        Logout
      </button>
    </header>
  )
}

export default AdminNavbar
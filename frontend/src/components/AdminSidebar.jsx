import React from 'react'
import { NavLink } from "react-router-dom";
import add_icon from "../assets/admin_assets/add_icon.png"
import order_icon from "../assets/admin_assets/order_icon.png"

const AdminSidebar = () => {
  return (
    <div className="h-screen flex items-end flex-col gap-10 w-1/5 border-r border-gray-200 pt-10">

      <NavLink
        to="/admin/addItem"
        className={({ isActive }) =>
          `btn btn-primary justify-start font-medium text-xl border w-60 h-15 ${
            isActive
              ? "bg-pink-200 text-black border-pink-600"
              : "bg-white text-black border-gray-400"
          }`
        }
      >
        <img src={add_icon} alt="add icon" className="w-5 h-5 mr-5" />
        Add Item
      </NavLink>

      <NavLink
        to="/admin/products"
        className={({ isActive }) =>
          `btn btn-primary justify-start font-medium text-xl border w-60 h-15 ${
            isActive
              ? "bg-pink-200 text-black border-pink-600"
              : "bg-white text-black border-gray-400"
          }`
        }
      >
        <img src={order_icon} alt="order icon" className="w-5 h-5 mr-5" />
        Products
      </NavLink>

      <NavLink
        to="/admin/orders"
        className={({ isActive }) =>
          `btn btn-primary justify-start font-medium text-xl border w-60 h-15 ${
            isActive
              ? "bg-pink-200 text-black border-pink-600"
              : "bg-white text-black border-gray-400"
          }`
        }
      >
        <img src={order_icon} alt="order icon" className="w-5 h-5 mr-5" />
        Orders
      </NavLink>

    </div>
  )
}

export default AdminSidebar
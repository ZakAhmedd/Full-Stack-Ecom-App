import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/admin_assets/logo.png";
import useAuthStore from "../stores/AuthStore";
import { Menu, X } from "lucide-react";

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { logout } = useAuthStore();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="w-full flex justify-between items-center px-15 py-5 border-b border-gray-200">
      <img src={logo} alt="logo" className="w-40" />

      <div className="relative xl:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 flex justify-center items-center flex-col gap-5 bg-pink-100 w-70 py-5 border border-pink-300">
            <Link
              to="/admin/addItem"
              className="btn w-1/2"
              onClick={() => setIsOpen(false)}
            >
              Add Item
            </Link>
            <Link
              to="/admin/products"
              className="btn w-1/2"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/admin/orders"
              className="btn w-1/2"
              onClick={() => setIsOpen(false)}
            >
              Orders
            </Link>
          </div>
        )}
      </div>

      <button
        onClick={handleLogout}
        className="bg-black text-white px-6 py-2 rounded-full"
      >
        Logout
      </button>
    </header>
  );
};

export default AdminNavbar;

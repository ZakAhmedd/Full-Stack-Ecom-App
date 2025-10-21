import React, {useEffect, useRef} from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import useSearchBarStore from "../stores/SearchBarStore";
import useCartStore from "../stores/CartStore";
import useAuthStore from "../stores/AuthStore";

import logo from "../assets/frontend_assets/logo.png";
import search_icon from "../assets/frontend_assets/search_icon.png";
import profile_icon from "../assets/frontend_assets/profile_icon.png";
import cart_icon from "../assets/frontend_assets/cart_icon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);

  const cartItems = useCartStore((state) => state.cartItems);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const logout = useAuthStore((state) => state.logout);

  const location = useLocation();
  const notHome = location.pathname !== "/";
  const navigate = useNavigate();

  const openSearchBar = useSearchBarStore((state) => state.openSearchBar);

  const cartEmpty = cartItems.length === 0;

  const handleSearchClick = () => {
    openSearchBar();
    navigate("/collection", { state: { showSearch: true } });
  };

  const profileRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout()
    navigate("/")
    setIsProfileOpen(false);
  };

  return (
    <header className="w-full p-7 relative">
      <div
        className={`flex justify-between xl:mx-32 ${notHome ? "pb-7 border-b-[3px] border-gray-200" : ""}`}
      >
        <NavLink to="/">
          <img className="max-w-[195px]" src={logo} alt="logo" />
        </NavLink>

        <div className="hidden xl:flex justify-center items-center gap-7 font-medium text-[18px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative pb-1 ${
                isActive
                  ? "after:absolute after:left-1/2 after:-bottom-0.5 after:w-6 after:h-0.5 after:bg-black after:-translate-x-1/2"
                  : ""
              }`
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="/collection"
            className={({ isActive }) =>
              `relative pb-1 ${
                isActive
                  ? "after:absolute after:left-1/2 after:-bottom-0.5 after:w-6 after:h-0.5 after:bg-black after:-translate-x-1/2"
                  : ""
              }`
            }
          >
            COLLECTION
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative pb-1 ${
                isActive
                  ? "after:absolute after:left-1/2 after:-bottom-0.5 after:w-6 after:h-0.5 after:bg-black after:-translate-x-1/2"
                  : ""
              }`
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative pb-1 ${
                isActive
                  ? "after:absolute after:left-1/2 after:-bottom-0.5 after:w-6 after:h-0.5 after:bg-black after:-translate-x-1/2"
                  : ""
              }`
            }
          >
            CONTACT
          </NavLink>

          <NavLink
            to="/adminLogin"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 rounded-4xl px-6 py-3 text-sm"
          >
            {" "}
            Admin Panel
          </NavLink>
        </div>

        <div className="flex justify-center items-center gap-8 pl-50 xl:pl-0">
          <button onClick={handleSearchClick} className="cursor-pointer">
            <img src={search_icon} alt="Search" className="w-7 h-7" />
          </button>

          {isLoggedIn ? (
            <div className="flex items-center" ref={profileRef}>
              <div className="relative">

              <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center justify-center cursor-pointer">
                <img src={profile_icon} alt="Profile" className="w-7 h-7.5" />
              </button>

              {isProfileOpen && 
                <div className="absolute -left-15 flex flex-col items-center mt-5 w-40 h-auto bg-gray-100 text-white border-2 rounded-lg shadow-lg shadow-gray-400 z-50 gap-5 px-5 py-10">
                  <NavLink to = "/orders">
                    <button onClick={() =>setIsProfileOpen(false)} className="btn font-extrabold text-gray-700 bg-white">
                      Orders
                    </button>
                  </NavLink>
                  <button onClick={() =>handleLogout()} className="btn w-20 font-extrabold text-gray-700 bg-white">
                    Logout
                  </button>
                </div> 
              }

              </div>
            </div>
          ) : (
            <NavLink to="/login" className="rounded">
              <img src={profile_icon} alt="Profile" className="w-7 h-7.5" />
            </NavLink>
          )}

          <NavLink to="/cart" className="relative inline-block rounded">
            <img src={cart_icon} alt="Cart" className="w-7 h-7.5" />
            {/* Badge */}
            <span className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartEmpty ? 0 : cartItems.length}
            </span>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button className="xl:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-md z-50">
          <nav className="flex flex-col items-center gap-4 py-4">
            <NavLink
              to="/"
              className="w-full text-center py-2 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </NavLink>
            <NavLink
              to="/collection"
              className="w-full text-center py-2 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              COLLECTION
            </NavLink>
            <NavLink
              to="/about"
              className="w-full text-center py-2 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/contact"
              className="w-full text-center py-2 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </NavLink>
            <NavLink
              to="/adminLogin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-sm text-center py-2 hover:bg-gray-100 border border-gray-300 rounded-2xl"
              onClick={() => setIsOpen(false)}
            >
              ADMIN PANEL
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

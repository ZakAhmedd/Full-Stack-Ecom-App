import React from "react";
import search_icon from "../assets/frontend_assets/search_icon.png";
import cross_icon from "../assets/frontend_assets/cross_icon.png";

const SearchBar = ({ searchTerm, setSearchTerm, onClose }) => {

  return (
    <div className="w-full relative flex justify-center bg-gray-100 py-7 mb-10 -mt-12 border-b-2 border-gray-200">
      <div className="relative w-1/2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          className="w-full border border-gray-400 text-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
        />
        <img src={search_icon} alt="search icon" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
        <button
          type="button"
          onClick={onClose}
          className="absolute -right-7 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center cursor-pointer"
          aria-label="Close search bar"
          >
          <img src={cross_icon} alt="" className="w-4 h-4" />
        </button>
      </div>
  </div>
  );
};

export default SearchBar;

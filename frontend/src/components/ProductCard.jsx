import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product._id}`} className="block p-4">
      <img 
        className="w-full h-auto object-cover mb-3 transition-transform duration-300 ease-in-out transform hover:scale-105" 
        src={product.image} alt={product.name} 
      />

      <h2 className="text-lg leading-tight">{product.name}</h2>
      <p className="font-bold text-gray-800 mt-2">£{product.price}</p>
    </Link>
  );
}

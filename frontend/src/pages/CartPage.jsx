import React from "react";
import ProductCart from "../components/ProductCart";
import useCartStore from "../stores/CartStore";
import CartTotal from "../components/CartTotal";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CartPage = () => {

  const cartItems = useCartStore((state) => state.cartItems);

  const cartEmpty = cartItems.length === 0;
  const navigate = useNavigate();


  const handleClick = () => {
  {
    cartItems.length === 0 
    ? toast.error("Cart is empty.")
    : navigate("/checkout");
  }
  }

  return (
    <div className="h-auto mx-10 xl:mx-40 mt-10">

      <div className="flex items-center gap-2 text-3xl font-medium tracking-wide mb-10">
        <span className="text-gray-500">YOUR</span>
        <span className="text-gray-800">CART</span>
        <span className="w-16 h-[2.5px] bg-black"></span>
      </div>

      <div className="flex flex-col items-start">
        {/* LEFT SIDE — cart items */}
        <div className="flex flex-col w-full gap-7">
          {!cartEmpty && 
          cartItems.map((item) => (
            <ProductCart key={item._id} item={item} />
          ))}
        </div>
      </div>

      {/* RIGHT SIDE — totals */}
      <div className="w-full xl:w-[600px] mt-30 text-lg ml-auto">
        <CartTotal />
        <div className="flex mt-8 justify-end">
          <button onClick={handleClick} className="w-1/3 xl:w-1/2 bg-black text-white py-4 text-sm xl:text-lg font-medium hover:bg-gray-800 transition cursor-pointer">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>

    </div>
  );
};

export default CartPage;

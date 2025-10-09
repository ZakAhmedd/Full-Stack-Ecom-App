import React from "react";
import useCartStore from "../stores/CartStore";

const CartTotal = () => {

  const total = useCartStore((state) => state.getTotal());

  const shippingFee = 10;

  return (

    <div>
      <div className="flex items-center gap-2 text-3xl font-medium tracking-wide mb-5">
        <span className="text-gray-500">CART</span>
        <span className="text-gray-800">TOTALS</span>
        <span className="w-10 h-[2px] bg-black"></span>
      </div>

      <div className="flex justify-between py-2 border-b border-gray-200 font-medium">
        <span>Subtotal</span>
        <span>£{total}</span>
      </div>

      <div className="flex justify-between py-2 border-b border-gray-200 font-medium">
        <span>Shipping Fee</span>
        <span>£{shippingFee}</span>
      </div>

      <div className="flex justify-between py-3 font-extrabold">
        <span>Total</span>
        <span>£{(total + shippingFee).toFixed(2)}</span>
      </div>

    </div>
  );
};

export default CartTotal;

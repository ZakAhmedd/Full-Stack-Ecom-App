import React, { useState } from 'react'
import CartTotal from "../components/CartTotal";
import DeliveryForm from "../components/DeliveryForm";
import stripe_logo from "../assets/frontend_assets/stripe_logo.png";
import razorpay_logo from "../assets/frontend_assets/razorpay_logo.png";
import toast from "react-hot-toast";
import axios from "axios";
import useCartStore from "../stores/CartStore";

const CheckoutPage = () => {

  const [selectedMethod, setSelectedMethod] = useState("");
  const [email, setEmail] = useState("");

  const cartItems = useCartStore((state) => state.cartItems);

  const isCash = (selectedMethod === "cash");
  const isStripe = (selectedMethod === "stripe");

  const handleClick = (method) => {
    {method === "razorpay"
      ? toast.error(`${method} is disabled for now, use Stripe or COD`, {
        icon: "⚠️",
        style: {
          background: "#FFFFFF",
          color: "#991b1b",
          border: "1px solid #FFBF00",
        },
      })
      : setSelectedMethod(method);
    }
    }

  const handleCheckout = async () => {
    const response = await axios.post("http://localhost:5001/api/stripe/create-checkout-session", {
      cartItems,
      userEmail: email,
    });
    window.location.href = response.data.url;
  };

  return (
    <div className="h-screen flex mx-15 xl:mx-40 mt-20 gap-10">

      {/* LEFT SIDE */}
      <div className="flex w-4/5 flex-col gap-10">
        <div className="flex items-center gap-2 text-3xl font-medium tracking-wide mb-5">
          <span className="text-gray-500">DELIVERY</span>
          <span className="text-gray-800">INFORMATION</span>
          <span className="w-10 h-[2px] bg-black"></span>
        </div>
        <DeliveryForm email={email} setEmail={setEmail}/>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-3/4 mt-15 text-lg ml-auto">
        <CartTotal />
        <div className="flex flex-col mt-10">
          <div className="flex items-center gap-2 text-xl font-medium tracking-wide mb-5">
            <span className="text-gray-500">PAYMENT</span>
            <span className="text-gray-800">METHOD</span>
            <span className="w-10 h-[2px] bg-black"></span>
          </div>
          <div className="flex h-15 justify-center items-center gap-5">
            <div className={`flex justify-center items-center w-1/3 h-full border border-gray-200 py-2 ${isStripe ? "border-green-500" : ""}`}>
              <button onClick={() => handleClick("stripe")} className="cursor-pointer">
                <img className="w-full max-h-[30px] object-contain" src={stripe_logo} alt="stripe logo" />
              </button>
            </div>
            <div className="flex justify-center items-center w-1/3 h-full border border-gray-200 py-2">
              <button onClick={() => handleClick("razorpay")} className="cursor-pointer">
                <img className="w-full max-h-[30px] object-contain" src={razorpay_logo} alt="razorpay logo" />
              </button>
            </div>
            <div className={`flex text-gray-600 text-sm font-bold justify-center items-center w-1/3 h-full border border-gray-200 p-5 ${isCash ? "border-green-500" : ""}`} >
              <button onClick={() => handleClick("cash")} className="cursor-pointer">
                CASH ON DELIVERY
              </button>
            </div>
          </div>
          <div className="flex mt-15 justify-end">
            <button onClick={handleCheckout} className="w-1/3 xl:w-1/2 bg-black text-white py-4 text-sm xl:text-lg font-medium hover:bg-gray-800 transition cursor-pointer">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CheckoutPage
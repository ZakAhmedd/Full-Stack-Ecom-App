import React, { useState, useRef } from 'react'
import CartTotal from "../components/CartTotal";
import DeliveryForm from "../components/DeliveryForm";
import stripe_logo from "../assets/frontend_assets/stripe_logo.png";
import razorpay_logo from "../assets/frontend_assets/razorpay_logo.png";
import toast from "react-hot-toast";
import { axiosInstance } from '../lib/axios';
import useCartStore from "../stores/CartStore";

const CheckoutPage = () => {

  const [selectedMethod, setSelectedMethod] = useState("");
  const [deliveryInfo, setDeliveryInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
    phone: "",
  });

  const formikRef = useRef()

  const cartItems = useCartStore((state) => state.cartItems);

  const isCash = (selectedMethod === "cash");
  const isStripe = (selectedMethod === "stripe");

  const handleClick = (method) => {
    {method === "razorpay" || method === "cash"
      ? toast.error(`${method} is disabled for now, use Stripe`, {
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

 const handleStripeCheckout = async () => {
  const errors = await formikRef.current.validateForm();

  const markAllTouched = (obj) => {
    if (typeof obj !== "object" || obj === null) return true;
    return Object.fromEntries(Object.keys(obj).map((key) => [key, markAllTouched(obj[key])]));
  };

  formikRef.current.setTouched(markAllTouched(formikRef.current.values), true);

  if (Object.keys(errors).length > 0) {
    toast.error("Please fill all the details correctly", {
      icon: "⚠️",
      style: {
        background: "#FFFFFF",
        color: "#991b1b",
        border: "1px solid #FFBF00",
      },
    });
    return;
  }

  const validValues = formikRef.current.values;
  setDeliveryInfo(validValues);

  try {
    const response = await axiosInstance.post("/stripe/create-checkout-session",
      { cartItems, deliveryInfo: validValues },
    );

    window.location.href = response.data.url;
  } catch (err) {
    console.error(err);
    toast.error("Something went wrong with Stripe checkout", { icon: "⚠️" });
  }
};

  return (
    <div className="min-h-screen flex flex-col xl:flex-row mx-15 xl:mx-40 mt-20 gap-10">

      {/* LEFT SIDE */}
      <div className="flex w-4/5 flex-col gap-10">
        <div className="flex items-center gap-2 text-2xl xl:text-3xl font-medium tracking-wide mb-5">
          <span className="text-gray-500">DELIVERY</span>
          <span className="text-gray-800">INFORMATION</span>
          <span className="w-10 h-[2px] bg-black"></span>
        </div>
        <DeliveryForm deliveryInfo = {deliveryInfo} setDeliveryInfo = {setDeliveryInfo} formikRef = {formikRef} />
      </div>

      {/* RIGHT SIDE */}
      <div className="xl:w-3/4 mt-15 text-lg xl:ml-auto">
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
            <button onClick={handleStripeCheckout} className="w-1/3 xl:w-1/2 bg-black text-white py-4 text-sm xl:text-lg font-medium hover:bg-gray-800 transition cursor-pointer">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CheckoutPage
import React from 'react'
import { NavLink } from "react-router-dom";
import useAuthStore from "../stores/AuthStore";

const SuccessPage = () => {

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex flex-col bg-gray-100 border-3 border-blue-800 p-10 justify-center items-center gap-2 text-3xl font-medium tracking-wide">
        <span className="text-gray-800">Thank you </span>
        <span className="text-gray-500">for your order!</span>
      </div>
      <div className="flex flex-col gap-20 mt-20">

        {isLoggedIn ? (
          <div className="flex flex-col justify-center">
            <p className="text-2xl text-gray-500 font-semibold mb-15">You can view all of your Orders using the below button:</p>
            <NavLink to ="/orders" className="flex justify-center rounded-md">
              <button className="btn btn-primary w-1/2 bg-gray-200 tracking-wide text-blue-700 font-bold text-xl py-10">View Orders</button>
            </NavLink>
          </div>
        )
        : (
          <div className="flex flex-col justify-center">
        <p className="text-xl text-gray-500 font-semibold mb-15 max-w-140 text-center">To view your orders please signup / login to your account using the same email address:</p>
        <NavLink to ="/login" className="flex rounded-md">
          <button className="btn btn-primary w-full bg-gray-200 tracking-wide text-blue-700 font-bold text-xl py-10">Login / Signup</button>
        </NavLink>
        </div>
      )
      }
      </div>
    </div>
  )
}

export default SuccessPage
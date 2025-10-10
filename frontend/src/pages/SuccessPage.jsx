import React from 'react'
import { NavLink } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex flex-col border-3 border-blue-800 p-10 justify-center items-center gap-2 text-3xl font-medium tracking-wide">
        <span className="text-gray-800">Thank you </span>
        <span className="text-gray-500">for your order!</span>
      </div>
      <div className="flex flex-col gap-20 mt-20">
        <p className="text-2xl text-gray-500 font-semibold">To view your orders please login to your account:</p>
        <NavLink to ="/login" className="flex border rounded-md">
          <button className="btn btn-primary w-full bg-gray-200 tracking-wide text-blue-700 font-bold text-xl py-10">Login</button>
        </NavLink>
      </div>
    </div>
  )
}

export default SuccessPage
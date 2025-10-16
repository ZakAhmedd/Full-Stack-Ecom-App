import React from 'react'

const OrdersPage = () => {
  return (
    <div className="flex flex-col mx-15 xl:mx-40 mt-3">
      <div className="flex justify-center items-center gap-2 text-3xl font-medium tracking-wide">
        <span className="text-gray-500">YOUR </span>
        <span className="text-gray-800">ORDERS</span>
        <span className="w-16 h-[2.5px] bg-black"></span>
      </div>
    </div>
  )
}

export default OrdersPage
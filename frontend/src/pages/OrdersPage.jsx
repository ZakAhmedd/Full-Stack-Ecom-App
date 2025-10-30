import React, { useEffect, useState } from "react"
import { axiosInstance } from "../lib/axios"

const OrdersPage = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axiosInstance.get("/orders/my-orders")
        setOrders(response.data)
      } catch (error) {
        console.error("Error fetching orders:", error)
      }
    }

    getOrders()
  }, [])

  return (
    <div className="flex flex-col mx-4 sm:mx-10 lg:mx-20 xl:mx-40 mt-5 mb-10">
      <div className="flex justify-center items-center gap-2 text-2xl sm:text-3xl font-medium tracking-wide mb-10">
        <span className="text-gray-500">YOUR</span>
        <span className="text-gray-800">ORDERS</span>
        <span className="hidden sm:block w-16 h-[2.5px] bg-black"></span>
      </div>

      <div className="flex flex-col gap-5">
        {orders.length === 0 ? (
          <p className="text-center text-gray-500 mt-20">You have no orders yet.</p>
        ) : (
          orders.map((order) => (
            <div
              key={order._id}
              className="border border-gray-300 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className="flex flex-col xl:flex-row justify-between gap-4 xl:gap-6">
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                  <p className="font-semibold text-gray-800">
                    Order ID: <span className="text-gray-600">{order._id}</span>
                  </p>
                  <p className="text-gray-600">
                    Status:{" "}
                    <span
                      className={`${
                        order.status === "paid"
                          ? "text-green-600"
                          : "text-yellow-600"
                      } font-medium`}
                    >
                      {order.status}
                    </span>
                  </p>
                  <p className="text-gray-600">
                    Total:{" "}
                    <span className="font-medium text-black">
                      £{order.total.toFixed(2)}
                    </span>
                  </p>
                </div>

                <div className="flex gap-2 overflow-x-auto pb-2 xl:pb-0">
                  {order.items.map((item) => (
                    <img
                      key={item._id}
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md flex-shrink-0"
                    />
                  ))}
                </div>

                <div className="flex flex-col gap-2 text-sm sm:text-base">
                  <p className="text-gray-600">
                    Product(s):{" "}
                    <span className="font-medium text-black">
                      {order.items.map((item) => item.name).join(", ")}
                    </span>
                  </p>

                  <p className="text-gray-600">
                    Items:{" "}
                    <span className="font-medium text-black">
                      {order.items.reduce((acc, item) => acc + item.quantity, 0)}
                    </span>
                  </p>

                  <p className="text-gray-600">
                    Size(s):{" "}
                    <span className="font-medium text-black">
                      {order.items.map((item) => item.size).join(", ")}
                    </span>
                  </p>
                </div>

                <div className="text-sm text-gray-500 text-right">
                  <p>{new Date(order.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default OrdersPage

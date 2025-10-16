import React, { useEffect, useState } from "react"
import axios from "axios"

const OrdersPage = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/orders/my-orders", {
          withCredentials: true,
        })
        setOrders(response.data)
      } catch (error) {
        console.error("Error fetching orders:", error)
      }
    }

    getOrders()
  }, [])

  return (
    <div className="flex flex-col mx-15 xl:mx-40 mt-3">

      <div className="flex justify-center items-center gap-2 text-3xl font-medium tracking-wide mb-8">
        <span className="text-gray-500">YOUR</span>
        <span className="text-gray-800">ORDERS</span>
        <span className="w-16 h-[2.5px] bg-black"></span>
      </div>

      <div className="flex flex-col gap-5">
        {orders.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">You have no orders yet.</p>
        ) : (
          orders.map((order) => (
            <div
              key={order._id}
              className="border border-gray-300 rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between">
                <div>
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
                <div className="text-sm text-gray-500">
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
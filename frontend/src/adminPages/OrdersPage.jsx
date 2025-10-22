import React, { useEffect } from "react";
import AdminOrders from "../components/AdminOrders";
import useOrderStore from "../stores/OrderStore";

const OrdersPage = () => {
  const { orders, getOrders, loading, error } = useOrderStore();

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="flex w-full flex-col xl:px-15 gap-6 overflow-x-auto">
      {/* Header Row */}
      <div className="w-fit grid grid-cols-[300px_200px_150px_150px_1fr] bg-gray-100 border px-6 py-2 text-gray-700 font-bold">
        <h1>Order ID</h1>
        <h1>Name</h1>
        <h1>Total</h1>
        <h1>Date</h1>
        <h1>Status</h1>
      </div>

      {/* Orders */}
      <div className="w-full xl:w-4/5 flex flex-col">
        {orders.map((order) => (
          <AdminOrders key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;

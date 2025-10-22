import React from "react";

const AdminOrders = ({ order }) => {
  return (
    <div className="min-w-[1000px] grid grid-cols-[300px_200px_150px_170px_1fr] items-center border-b border-gray-300 px-4 py-8">
      <div>{order._id}</div>
      <div>{order.deliveryInfo.firstName} {order.deliveryInfo.lastName}</div>
      <div>£{order.total.toFixed(2)}</div>
      <div>{new Date(order.createdAt).toLocaleDateString()}</div>
      <div>{order.status}</div>
    </div>
  );
};

export default AdminOrders;

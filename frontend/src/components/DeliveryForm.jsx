import React from "react";

const DeliveryForm = ({deliveryInfo, setDeliveryInfo}) => {
  return (
    <form className="grid grid-cols-1 xl:grid-cols-2 gap-4 text-gray-900">
      {/* First Name */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="John"
          value={deliveryInfo.firstName}
          onChange={(e) => setDeliveryInfo({...deliveryInfo, firstName: e.target.value})}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
          required
        />
      </div>

      {/* Last Name */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Doe"
          value={deliveryInfo.lastName}
          onChange={(e) => setDeliveryInfo({...deliveryInfo, lastName: e.target.value})}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
          required
        />
      </div>

      {/* Email */}
      <div className="flex flex-col xl:col-span-2">
        <label className="text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          placeholder="john.doe@email.com"
          value={deliveryInfo.email}
          onChange={(e) => setDeliveryInfo({...deliveryInfo, email: e.target.value})}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
          required
        />
      </div>

      {/* Street */}
      <div className="flex flex-col xl:col-span-2">
        <label className="text-sm font-medium mb-1">Street Address</label>
        <input
          type="text"
          name="street"
          placeholder="123 Main St"
          value={deliveryInfo.address.street}
          onChange={(e) => setDeliveryInfo({...deliveryInfo, address: {...deliveryInfo.address, street: e.target.value}})}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
          required
        />
      </div>

      {/* City */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">City</label>
        <input
          type="text"
          name="city"
          placeholder="London"
          value={deliveryInfo.address.city}
          onChange={(e) => setDeliveryInfo({...deliveryInfo, address: {...deliveryInfo.address, city: e.target.value}})}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
          required
        />
      </div>

      {/* State */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">State</label>
        <input
          type="text"
          name="state"
          placeholder="England"
          value={deliveryInfo.address.state}
          onChange={(e) => setDeliveryInfo({...deliveryInfo, address: {...deliveryInfo.address, state: e.target.value}})}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
          required
        />
      </div>

      {/* Zip Code */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Zip Code</label>
        <input
          type="text"
          name="zip"
          placeholder="EC1A 1BB"
          value={deliveryInfo.address.zipCode}
          onChange={(e) => setDeliveryInfo({...deliveryInfo, address: {...deliveryInfo.address, zipCode: e.target.value}})}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
          required
        />
      </div>

      {/* Country */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Country</label>
        <input
          type="text"
          name="country"
          placeholder="United Kingdom"
          value={deliveryInfo.address.country}
          onChange={(e) => setDeliveryInfo({...deliveryInfo, address: {...deliveryInfo.address, country: e.target.value}})}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
          required
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col xl:col-span-2">
        <label className="text-sm font-medium mb-1">Phone</label>
        <input
          type="tel"
          name="phone"
          placeholder="+44 7123 456789"
          value={deliveryInfo.phone}
          onChange={(e) => setDeliveryInfo({...deliveryInfo, phone: e.target.value})}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
          required
        />
      </div>
    </form>
  );
};

export default DeliveryForm;

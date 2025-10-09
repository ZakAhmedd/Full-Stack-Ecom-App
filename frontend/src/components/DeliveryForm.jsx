import React from "react";

const DeliveryForm = () => {
  return (
    <form className="grid grid-cols-1 xl:grid-cols-2 gap-4 text-gray-500">
      {/* First Name */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="John"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
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
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
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
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
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
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
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
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
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
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
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
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
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
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
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
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
      </div>
    </form>
  );
};

export default DeliveryForm;

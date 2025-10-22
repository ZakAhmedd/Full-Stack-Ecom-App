import React, { useState } from 'react'
import upload_area from "../assets/admin_assets/upload_area.png"
import axios from "axios"
import toast from "react-hot-toast"

const AddItemPage = () => {

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    subCategory: "",
    price: "",
    sizes: [],
    bestseller: false,
    image: [],
  });

  const toggleSize = (size) => {
    const newSizes = formData.sizes.includes(size)
      ? formData.sizes.filter(s => s !== size)
      : [...formData.sizes, size];
    setFormData({ ...formData, sizes: newSizes });
  };

  const sizes = ["S", "M", "L", "XL", "XXL"]

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("category", formData.category);
      data.append("subCategory", formData.subCategory);
      data.append("bestseller", formData.bestseller);

      formData.sizes.forEach((size) => data.append("sizes[]", size));

      formData.image.forEach((file) => data.append("image", file));

      const response = await axios.post(
        "http://localhost:5001/api/products",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      console.log("Product added:", response.data);
      toast.success("Product added successfully!");
      setFormData({
        name: "",
        description: "",
        price: "",
        category: "",
        subCategory: "",
        bestseller: false,
        sizes: [],
        image: [],
      });
    } catch (err) {
      console.error("Failed to add product:", err);
      toast.error("Failed to add product");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10 p-10 pl-20 text-xl text-gray-700 font-medium">
      <div className="flex flex-col gap-5">
        <h1>Upload Images</h1>
        <div className="flex gap-4 flex-wrap">
          {[0, 1, 2, 3].map((_, i) => (
            <label
              key={i}
              className="cursor-pointer w-32 h-32 rounded-lg flex items-center justify-center overflow-hidden"
            >
              {formData.image[i] ? (
                <img
                  src={URL.createObjectURL(formData.image[i])}
                  alt={`preview ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={upload_area}
                  alt={`upload placeholder ${i + 1}`}
                  className="w-50 h-30 object-contain"
                />
              )}
              <input
                type="file"
                name="image"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const files = [...formData.image];
                  files[i] = e.target.files[0];
                  setFormData({ ...formData, image: files });
                }}
              />
            </label>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col gap-4 w-full max-w-xl">
        <label htmlFor="name" className="font-medium">
          Product Name
        </label>
        <input
          type="text"
          placeholder="Enter product name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder:text-sm"
        />
      </div>

      <div className="flex flex-col gap-4 w-full max-w-xl">
        <label htmlFor="name" className="font-medium">
          Description
        </label>
        <textarea
          type="text"
          placeholder="Enter description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder:text-sm"
        />
      </div>

      <div className="flex gap-10">

        <div className="flex flex-col gap-4 w-full max-w-1/6">
          <label htmlFor="category">
            Product Category
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300 cursor-pointer"
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-1/6">
          <label htmlFor="subCategory">
            Sub Category
          </label>
          <select
            value={formData.subCategory}
            onChange={(e) => setFormData({ ...formData, subCategory: e.target.value })}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300 cursor-pointer"
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Men">Topwear</option>
            <option value="Women">Bottomwear</option>
            <option value="Kids">Winterwear</option>
          </select>
        </div>

        <div className="flex flex-col gap-2 w-full max-w-1/6">
          <label htmlFor="price" className="font-medium text-gray-700">
            Product Price (£)
          </label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            placeholder="£"
            min="0"
            step="0.01"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder:text-sm"
          />
        </div>

      </div>

      <div className="flex flex-col gap-2">
        <h1 className="font-medium text-gray-700">Product Sizes</h1>
        <div className="flex gap-2 flex-wrap">
          {sizes.map((size) => (
            <button
              type="button"
              key={size}
              onClick={() => toggleSize(size)}
              className={`px-4 py-2 rounded border ${
                formData.sizes.includes(size)
                  ? "bg-pink-300 text-white border-pink-400"
                  : "bg-gray-100 text-gray-700 border-gray-300"
              } hover:bg-pink-300 transition`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          id="bestseller"
          name="bestseller"
          checked={formData.bestseller}
          onChange={(e) => setFormData({ ...formData, bestseller: e.target.checked })}
          className="scale-140 accent-blue-500"
        />
        <label htmlFor="bestseller" className="text-md text-gray-700">
          Add to Bestseller
        </label>
      </div>

      <div className="mt-5">
        <button className="btn bg-black text-white text-xl py-10 px-15">
          ADD
        </button>
      </div>



    </form>
  )
}

export default AddItemPage
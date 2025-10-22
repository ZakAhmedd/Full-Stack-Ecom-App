import React, { useEffect } from "react";
import AdminProducts from "../components/AdminProducts";
import useProductStore from "../stores/ProductStore";

const ProductsPage = () => {
  const { products, getProducts } = useProductStore();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className="flex flex-col px-20 gap-10">
      {/* Header Row */}
      <div className="grid grid-cols-[200px_400px_200px_1fr_100px] bg-gray-100 border border-gray-300 px-8 py-3 text-centerfont-bold text-gray-700 text-lg font-bold">
        <h1>Image</h1>
        <h1>Name</h1>
        <h1>Category</h1>
        <h1>Price</h1>
        <h1 className="text-center">Delete</h1>
      </div>

      {/* Product Rows */}
      <div className="flex flex-col w-full divide-y divide-gray-200 gap-2">
        {products.map((product) => (
          <AdminProducts key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

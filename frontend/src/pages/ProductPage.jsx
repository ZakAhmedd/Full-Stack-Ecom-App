import React, { useState } from "react";
import { useParams } from "react-router-dom";
import star_icon from "../assets/frontend_assets/star_icon.png";
import star_dull from "../assets/frontend_assets/star_dull_icon.png";
import ProductCard from "../components/ProductCard";
import useCartStore from "../stores/CartStore";
import useProductStore from "../stores/ProductStore";
import toast from "react-hot-toast";

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState(false);

  const { products } = useProductStore();

  const { id } = useParams();
  const product = products.find((p) => p._id === id);
  const addItem = useCartStore((state) => state.addItem);
  const sizes = product.sizes;

  const relatedProducts = products.filter(
    (p) =>
      p.category === product.category &&
      p.subCategory === product.subCategory &&
      p._id !== product._id
  );

  const relatedLength = relatedProducts.length;

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-500">Product not found.</div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }

    addItem({ ...product, size: selectedSize });
    toast.success("Item added to cart!");
  };

  return (
    <div className="min-h-screen ml-10 xl:ml-0 flex flex-col justify-start px-6 gap-30 xl:px-40 py-5">
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="hidden xl:flex flex-col gap-4 max-w-[130px]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-contain cursor-pointer"
          />
        </div>

        {/* MAIN */}
        <div className="flex justify-center items-start mr-10">
          <img
            src={product.image}
            alt={product.name}
            className="w-[550px] h-auto object-contain"
          />
        </div>

        <div className="xl:hidden flex flex-col gap-4 max-w-[90px] xl:max-w-[130px]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-contain cursor-pointer"
          />
        </div>

        <div className="flex flex-col gap-5 xl:w-1/2 pt-4 max-w-xl">
          <h1 className="text-2xl font-semibold text-gray-800">
            {product.name}
          </h1>
          <div className="flex gap-1 items-center mb-4">
            <img src={star_icon} alt="star icon" className="w-4 h-4" />
            <img src={star_icon} alt="star icon" className="w-4 h-4" />
            <img src={star_icon} alt="star icon" className="w-4 h-4" />
            <img src={star_icon} alt="star icon" className="w-4 h-4" />
            <img src={star_dull} alt="star dull icon" className="w-4 h-4" />
            <p className="ml-2 text-xl">(122)</p>
          </div>
          <p className="text-xl font-semibold text-gray-900">£{product.price}</p>
          <p className="text-gray-500 text-base mb-5">{product.description}</p>
          <p className="text-xl font-medium">Select Size</p>
          <div className="flex gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`btn btn-lg ${
                  selectedSize === size
                    ? "border-1 border-red-500"
                    : "border border-gray-200"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          <button
            onClick={handleAddToCart}
            className="btn btn-neutral text-white text-sm font-medium px-7 py-6 mt-4 w-fit"
          >
            ADD TO CART
          </button>
          <div className="w-full h-[1px] bg-gray-200 mt-10"></div>
          <div className="flex flex-col gap-2 text-gray-500 font-medium text-base">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="border border-gray-200 w-fit px-6 py-3">
          <p className="text-lg font-extrabold">Description</p>
        </div>
        <div className="border border-gray-200 w-fit p-10">
          <p className="text-sm xl:text-base text-gray-600 font-medium">
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer. <br />
            <br />
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="flex items-center gap-2 text-3xl font-semibold font-outfit tracking-wide">
          <span className="text-gray-500">RELATED </span>
          <span className="text-gray-800">PRODUCTS</span>
          <span className="w-16 h-[2px] bg-black"></span>
        </div>
        <div
          className={`flex flex-wrap xl:flex-nowrap w-full justify-center gap-5 mt-10`}
        >
          {relatedProducts.slice(0, 5).map((product, index) => (
            <div
              key={product._id}
              className={`max-w-[200px] ${index === 4 && relatedLength >= 5 ? "hidden xl:block" : ""}`}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

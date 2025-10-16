import React from 'react'
import bin_icon from "../assets/frontend_assets/bin_icon.png"
import useCartStore from "../stores/CartStore"

const ProductCart = (product) => {

  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const increment = () => {
    updateQuantity(product.item._id, product.item.size, product.item.quantity + 1);
  };

  const decrement = () => {
    if (product.item.quantity > 1) {
      updateQuantity(product.item._id, product.item.size, product.item.quantity - 1);
    } else {
      removeItem(product.item._id, product.item.size);
    }
  };

  return (
    <div className="flex justify-between items-center w-full border-t border-b border-gray-200 py-5">

      <div className="flex">
        <div className="w-[150px] flex items-center justify-center">
          <img src={product.item.image} alt={product.item.name} className="max-w-full max-h-[100px] xl:max-h-[130px] object-contain" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-xl xl:text-2xl text-gray-700 font-medium">{product.item.name}</h2>
          <div className="flex items-center mt-6">
            <h2 className="text-lg xl:text-xl text-gray-700 font-medium">£{product.item.price}</h2>
            <h2 className="text-md xl:text-xl text-gray-700 font-medium ml-5 bg-gray-100 border border-gray-300 px-2 py-1">{product.item.size}</h2>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border border-gray-200 w-[100px] p-1">
        <h2 className="text-lg xl:text-xl text-gray-700 font-medium">{product.item.quantity}</h2>
        <div className="flex flex-col gap-1 ml-2">
          <button
            onClick={increment}
            className="border text-xs border-gray-200 px-1 rounded-sm bg-gray-100 hover:bg-gray-200">
            +
          </button>
          <button
            onClick={decrement}
            className="border text-xs border-gray-200 px-1 rounded-sm bg-gray-100 hover:bg-gray-200">
            –
          </button>
        </div>

      </div>
      <div className="flex justify-center items-center xl:mr-15">
        <button onClick={() => removeItem(product.item._id, product.item.size)} className="cursor-pointer">
          <img src={bin_icon} alt="bin icon" className="w-7 h-auto" />
        </button>
      </div>

    </div>
  )
}

export default ProductCart
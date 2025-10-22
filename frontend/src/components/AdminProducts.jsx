import React from 'react'
import cross_icon from "../assets/frontend_assets/cross_icon.png"
import useProductStore from "../stores/ProductStore"

const AdminProducts = ({product}) => {

  const { deleteProduct } = useProductStore();

  return (
    <div className="grid grid-cols-[200px_450px_180px_1fr_100px] items-center w-full border-t border-b border-gray-200 py-2">

      <div className="flex items-center">
        <div className="w-[150px] flex items-center justify-center">
          <img src={product.image} alt={product.name} className="max-w-full max-h-[100px] object-contain" />
        </div>
      </div>

      <div className="flex items-center">
        <h2 className="text-xl text-gray-700 font-medium">{product.name}</h2>
      </div>

      <div className="flex items-center">
        <h2 className="text-lg xl:text-xl text-gray-700 font-medium">{product.category}</h2>
      </div>

      <div className="flex items-center">
        <h2 className="text-lg xl:text-xl text-gray-700 font-medium">£{product.price}</h2>
      </div>

      <div className="flex items-center">
        <button onClick={() => deleteProduct(product._id)} className="cursor-pointer">
          <img src={cross_icon} alt="bin icon" className="w-5 h-auto" />
        </button>
      </div>

    </div>
  )
}

export default AdminProducts
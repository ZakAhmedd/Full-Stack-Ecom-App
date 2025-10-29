import React, {useEffect} from 'react'
import ProductCard from '../components/ProductCard'
import SubscribeForm from '../components/SubscribeForm'
import useProductStore from '../stores/ProductStore'

import hero_img from "../assets/frontend_assets/hero_img.png"
import exchange_icon from "../assets/frontend_assets/exchange_icon.png"
import quality_icon from "../assets/frontend_assets/quality_icon.png"
import support_icon from "../assets/frontend_assets/support_img.png"

const HomePage = () => {

  const { products, getProducts } = useProductStore();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className="mx-10 xl:mx-30">

      {/* HERO */}
      <div className="border-[0.5px] mt-10 xl:mt-0 mb-25 xl:h-110">

        <div className="flex flex-col xl:grid xl:grid-cols-2 h-full">
          <div className="flex items-center justify-center">

            <div className="flex flex-col items-start justify-center text-left gap-3 py-25 xl:py-0">
              <div className="flex items-center gap-2">
                <span className="w-15 h-[2.7px] bg-black"></span>
                <span className="text-gray-700 font-medium text-base xl:text-lg tracking-wide">OUR BESTSELLERS</span>
              </div>

              <h1 className="xl:text-6xl text-5xl font-serif font-extralight text-gray-800 pb-2">
                Latest Arrivals
              </h1>

              <div className="flex items-center gap-4">
                <span className="text-gray-800 font-bold tracking-wide text-base xl:text-lg">SHOP NOW</span>
                <span className="w-16 h-[1.2px] bg-gray-600"></span>
              </div>
            </div>

          </div>
          <div className="h-full">
            <img className="w-full h-full object-cover block" src={hero_img} alt="hero img" />
          </div>
        </div>
      </div>
      {/* HERO END */}

      {/* LATEST COLLECTIONS */}
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex items-center gap-2 text-3xl font-semibold font-outfit tracking-wide">
          <span className="text-gray-500">LATEST </span>
          <span className="text-gray-800">COLLECTIONS</span>
          <span className="w-16 h-[2px] bg-black"></span>
        </div>

        <div className="flex justify-center items-center mb-5">
          <p className="text-center text-gray-600 text-base mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-5 gap-4">
          {products.slice(0, 10).map((product, index) => (
            <div key={index}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* BEST SELLERS */}
      <div className="flex flex-col justify-center items-center gap-4 mt-20">
        <div className="flex items-center gap-2 text-3xl font-semibold font-outfit tracking-wide">
          <span className="text-gray-500">BEST </span>
          <span className="text-gray-800">SELLERS</span>
          <span className="w-16 h-[2px] bg-black"></span>
        </div>

        <div className="flex justify-center items-center mb-5">
          <p className="text-center text-gray-600 text-base mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-5 gap-4">

          {products.filter(product => product.bestseller === true).map((product, index) => (
            <div key={product._id} className={index === 4 ? "hidden xl:block" : ""}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* EXTRA */}
      <div className="flex flex-col justify-center items-center mt-30">
      
        <div className="flex flex-row justify-center items-center gap-5 xl:gap-38 text-center">
          <div className="flex flex-col items-center gap-2">
            <img className="mb-5 h-15 w-auto" src={exchange_icon} />
            <h2 className="font-semibold text-md xl:text-xl">Easy Exchange Policy</h2>
            <p className="text-gray-400 font-medium text-md xl:text-xl">We offer hassle free exchange policy</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img className="mb-5 h-15 w-auto" src={quality_icon} />
            <h2 className="font-semibold text-md xl:text-xl">7 Days Return Policy</h2>
            <p className="text-gray-400 font-medium text-md xl:text-xl">We provide 7 days free return policy</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img className="mb-5 h-15 w-auto" src={support_icon} />
            <h2 className="font-semibold text-md xl:text-xl">Best Customer Support</h2>
            <p className="text-gray-400 font-medium text-md xl:text-xl">We provide 24/7 customer support</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-40">
          <h2 className="font-bold text-2xl mb-5">Subscribe now & get 20% off</h2>
          <p className="text-gray-400 font-light text-lg text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          {/* Daisyui Button Component */}
          <SubscribeForm />
        </div>

      </div>

    </div>
  )
}

export default HomePage
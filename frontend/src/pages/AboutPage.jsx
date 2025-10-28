import React from 'react'
import about_img from "../assets/frontend_assets/about_img.png"
import SubscribeForm from '../components/SubscribeForm'

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col mx-15 xl:mx-40 mt-3">

      <div className="flex justify-center items-center gap-2 text-3xl font-medium tracking-wide">
        <span className="text-gray-500">ABOUT </span>
        <span className="text-gray-800">US</span>
        <span className="w-16 h-[2.5px] bg-black"></span>
      </div>
      <div className="flex flex-col xl:flex-row justify-center items-center xl:items-start gap-10 mt-20">
        <img src={about_img} alt='about img' className="w-full max-w-[300px] xl:max-w-[600px] h-auto object-contain mr-9" />
        <div className="mt-10">
          <p className="text-gray-500 text-xl font-medium leading-relaxed">Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes. <br />
          <br />
          Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
          <h2 className="text-xl font-extrabold mt-10 mb-10">Our Mission</h2>
          <p className="text-gray-500 text-xl font-medium leading-relaxed">Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </div>
      </div>

      <div className="flex flex-col mt-15">
        <div className="flex items-center gap-2 text-2xl font-medium tracking-wide">
          <span className="text-gray-500">WHY </span>
          <span className="text-gray-800">CHOOSE</span>
          <span className="text-gray-800">US</span>
          <span className="w-16 h-[2.5px] bg-black"></span>
        </div>
        <div className="grid grid-cols-3 mt-10">
          <div className="flex flex-col justify-center border border-gray-200 p-7 xl:p-22 gap-7">
            <h2 className="font-extrabold">Quality Assurance:</h2>
            <p className="text-gray-600 font-medium">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className="flex flex-col justify-center border border-gray-200 p-7 xl:p-22 gap-7">
            <h2 className="font-extrabold">Convenience:</h2>
            <p className="text-gray-600 font-medium">With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className="flex flex-col justify-center border border-gray-200 p-7 xl:p-22 gap-7">
            <h2 className="font-extrabold">Exceptional Customer Service:</h2>
            <p className="text-gray-600 font-medium">Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-20 mx-auto">
          <h2 className="font-bold text-xl xl:text-2xl mb-5">Subscribe now & get 20% off</h2>
          <p className="text-gray-400 font-light text-lg text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div className="w-full max-w-[500px] xl:max-w-none">
            <SubscribeForm />
          </div>
      </div>

    </div>
  )
}

export default AboutPage
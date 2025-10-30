import React from 'react'
import contact_img from "../assets/frontend_assets/contact_img.png"
import SubscribeForm from '../components/SubscribeForm'

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col mx-15 xl:mx-40 mt-3">

      <div className="flex justify-center items-center gap-2 text-2xl xl:text-3xl font-medium tracking-wide">
        <span className="text-gray-500">CONTACT </span>
        <span className="text-gray-800">US</span>
        <span className="w-16 h-[2.5px] bg-black"></span>
      </div>
      <div className="flex flex-col xl:flex-row justify-center items-center xl:items-start gap-10 mt-20 mb-20">
        <img src={contact_img} alt='about img' className="w-full max-w-[300px] xl:max-w-[600px] h-auto object-contain mr-9" />
        <div className="mt-10">
          <h2 className="text-2xl font-extrabold mt-10 mb-10 text-gray-600">Our Store</h2>
          <p className="text-gray-500 text-xl font-medium leading-relaxed">54709 Willms Station</p>
          <p className="text-gray-500 text-xl font-medium leading-relaxed">Suite 350, Washington, USA</p>
          <br />
          <p className="text-gray-500 text-xl font-medium leading-relaxed">Tel: (415) 555-0132</p>
          <p className="text-gray-500 text-xl font-medium leading-relaxed">Email: admin@forever.com</p>
          <h2 className="text-2xl font-extrabold mt-10 mb-10 text-gray-600">Careers at Forever</h2>
          <p className="text-gray-500 text-xl font-medium leading-relaxed">Learn more about our teams and job openings.</p>
          <button className="btn btn-neutral bg-white text-black text-lg font-medium mt-10 p-8">Explore Jobs</button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-20 mx-auto">
          <h2 className="font-bold text-xl xl:text-2xl mb-5 text-center">Subscribe now & get 20% off</h2>
          <p className="text-gray-400 font-light text-sm xl:text-lg text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div className="w-full max-w-[500px] xl:max-w-none">
            <SubscribeForm />
          </div>
      </div>

    </div>
  )
}

export default ContactPage
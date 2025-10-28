import React from 'react'
import { NavLink } from "react-router-dom";
import { FaInstagram } from 'react-icons/fa';
import logo from "../assets/frontend_assets/logo.png"

const Footer = () => {
  return (
    <footer className="mt-40">
        <div className="w-full p-7">
            <div className="flex justify-between xl:mx-20">
                <div className="w-40 xl:w-md">
                    <img className="max-w-[100px] xl:max-w-[175px] mb-6" src={logo} alt="logo" />
                    <p className="text-gray-600 font-medium text-[12px] xl:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="text-sm xl:text-base">
                    <p className="font-semibold text-lg xl:text-2xl mb-8">COMPANY</p>
                    <ul className="text-gray-600 font-medium space-y-2">
                        <li> <NavLink to="/" className="hover:underline decoration-gray-600">
                            Home
                        </NavLink></li>
                        <li> <NavLink to="/about" className="hover:underline decoration-gray-600">
                            About Us
                        </NavLink></li>
                        <li> <NavLink to="/terms" className="hover:underline decoration-gray-600">
                            Terms & Conditions
                        </NavLink></li>
                        <li> <NavLink to="/privacy" className="hover:underline decoration-gray-600">
                            Privacy Policy
                        </NavLink></li>
                    </ul>
                </div>
                <div className="flex flex-col text-sm xl:text-base">
                    <p className="font-semibold text-lg xl:text-2xl mb-8">GET IN TOUCH</p>
                    <ul className="text-gray-600 font-medium space-y-2">
                        <li>+1-000-000-0000</li>
                        <li className="mb-6">placeholder@gmail.com</li>
                        <li className="flex justify-center pr-7">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={25} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-15 flex justify-center mb-8">
                <div className="border-b-2 border-gray-200 w-350"></div>
            </div>
            <div>
                <p className="font-medium text-sm text-center">© 2025 Zak - All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
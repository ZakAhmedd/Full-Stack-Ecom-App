import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <fieldset className="fieldset flex flex-col justify-center items-center bg-base-200 border-base-300 rounded-box w-1/2 border p-7 pb-15">
        <h2 className="text-center font-bold text-2xl mb-10 tracking-wide">Login</h2>

        <label className="label">Email</label>
        <input type="email" className="input placeholder:text-gray-500" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input placeholder:text-gray-500" placeholder="Password" />

        <div className="relative items-center w-full mt-12">
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <button className="btn btn-neutral w-80">Login</button>
          </div>
          <div className="flex justify-end mr-5">
            <Link to="/signup">
              <button className="btn btn-neutral btn-sm">Sign Up</button>
            </Link>
          </div>
        </div>

      </fieldset>
    </div>
  )
}

export default LoginPage
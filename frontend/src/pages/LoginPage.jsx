import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5001/api/auth/login', formData)
      toast.success(
        <>
          Logged in successfully! <br />
          Redirecting to home page.
        </>
      )
      setTimeout(() => navigate('/'), 1500)
      setFormData({
        email: '',
        password: ''
      })
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed')
    }
  }

  return (
    <div className="flex justify-center items-center mt-10">
      <fieldset className="fieldset flex flex-col justify-center items-center bg-base-200 rounded-box w-1/2 border border-purple-300 p-7 pb-15">
        <h2 className="text-center font-bold text-2xl mb-10 tracking-wide">Login</h2>

        <form onSubmit={handleSubmit} className="flex flex-col w-full items-center space-y-6">
          <div className="flex flex-col w-full items-center">
            <label className="label mb-2">Email</label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="input placeholder:text-gray-500"
              required
            />
          </div>

          <div className="flex flex-col w-full items-center">
            <label className="label mb-2">Password</label>
            <input 
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="input placeholder:text-gray-500"
              required
            />
          </div>

          <div className="relative w-full mt-10">
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <button type="submit" className="btn btn-neutral w-80">Login</button>
            </div>

            <div className="flex justify-end mr-5 mt-16">
              <Link to="/signup">
                <button type="button" className="btn btn-neutral btn-sm">Sign Up</button>
              </Link>
            </div>
          </div>
        </form>
      </fieldset>
    </div>
  )
}

export default LoginPage

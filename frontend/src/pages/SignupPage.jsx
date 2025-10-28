import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from '../lib/axios'
import toast from 'react-hot-toast'

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.password.trim()) newErrors.password = 'Password is required'
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters'
    return newErrors
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      setErrors({})
      try {
        await axiosInstance.post('/signup', formData)

        toast.success(
          <>
            Signed up successfully! <br />
            Redirecting to login page.
          </>
        )
        setTimeout(() => navigate('/login'), 1500)
        setFormData({
          fullName: '',
          email: '',
          password: ''
        })
      } catch (error) {
        toast.error(error.response.data.message)
      }
    }
  }

  return (
    <div className="flex justify-center items-center mt-10">
      <fieldset className="fieldset flex flex-col justify-center items-center bg-base-200 rounded-box w-1/2 border border-purple-300 p-7 pb-15">
        <h2 className="text-center font-bold text-2xl mb-10 tracking-wide">Sign Up</h2>

        <form className="flex flex-col w-full items-center space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col w-full items-center gap-2">
            <label className="label">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="input placeholder:text-gray-500 max-w-xs"
              placeholder="Full Name"
            />
            {errors.fullName && <span className="text-red-500 text-sm mt-1">{errors.fullName}</span>}
          </div>

          <div className="flex flex-col w-full items-center gap-2">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input placeholder:text-gray-500 max-w-xs"
              placeholder="Email"
            />
            {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
          </div>

          <div className="flex flex-col w-full items-center gap-2">
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input placeholder:text-gray-500 max-w-xs"
              placeholder="Password"
            />
            {errors.password && <span className="text-red-500 text-sm mt-1">{errors.password}</span>}
          </div>

          <div className="flex justify-center items-center w-full mt-6">
            <button type="submit" className="btn btn-neutral w-80">Sign Up</button>
          </div>
        </form>
      </fieldset>
    </div>
  )
}

export default SignupPage

import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AppContext } from '../../context/AppContext'
import axios from 'axios'
import Loading from '../../components/student/Loading.jsx'

const Login = () => {
  const { navigate, backendUrl, setToken, setUser, setLogin } = useContext(AppContext)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async (data) => {
    setIsLoading(true)
    setErrorMessage('')

    try {
      const response = await axios.post(
        backendUrl + '/api/login',
        data
      )

      if (response.data.success) {
        localStorage.setItem('token', response.data.token)
        setToken(response.data.token)
        setUser(response.data.user)
        setLogin(true);
        navigate('/')
      } else {
        setErrorMessage(response.data.message || 'Login failed.')
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
        'An error occurred during login.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  // ✅ SHOW LOADING COMPONENT
  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-200 p-8 sm:p-10">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Please login to your account
          </p>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600 flex items-center gap-2">
              <span>⚠</span>
              {errorMessage}
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* Email */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              placeholder="Enter your email"
              className={`w-full px-4 py-3 bg-gray-50 border rounded-lg outline-none focus:ring-2 ${
                errors.email
                  ? 'border-red-300 focus:ring-red-200'
                  : 'border-gray-300 focus:ring-blue-200'
              }`}
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
              placeholder="Enter your password"
              className={`w-full px-4 py-3 bg-gray-50 border rounded-lg outline-none focus:ring-2 ${
                errors.password
                  ? 'border-red-300 focus:ring-red-200'
                  : 'border-gray-300 focus:ring-blue-200'
              }`}
            />
            {errors.password && (
              <p className="text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md"
          >
            Login
          </button>
        </form>

        {/* Signup */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <span
              onClick={() => navigate('/signup')}
              className="text-blue-600 font-semibold cursor-pointer hover:underline"
            >
              Sign up here
            </span>
          </p>
        </div>

      </div>
    </div>
  )
}

export default Login

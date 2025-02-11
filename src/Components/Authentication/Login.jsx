import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginValidation } from '../Authentication/Validation'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { axiosAuth } from '../../Axios/Axios-instance'
import { useContext } from 'react'
import { ContextSeekerName } from '../../Context/SeekerContext'
import { UserContext } from '../../Context/UserDetailsContext'
import axios from 'axios'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import { axiosgGoogleAuth } from '../../Axios/Axios-instance'

axios.defaults.withCredentials = true

const Login = () => {
  const navigate = useNavigate()

  const [error, setError] = useState('')
  const { setSavedUsername } = useContext(ContextSeekerName)
  const { setUserDetails } = useContext(UserContext)

  // Login form data
  const [loginForm, SetLoginForm] = useState({
    email: '',
    password: ''
  })

  const handleOnchange = e => {
    const validationErrors = { ...loginForm, [e.target.name]: e.target.value }
    SetLoginForm(validationErrors)
  }

  //Validation
  const handleValidation = e => {
    e.preventDefault()
    const errors = LoginValidation(loginForm)
    setError(errors)
    return Object.keys(errors).length === 0
  }

  //Login
  const handlelogin = async e => {
    e.preventDefault()
    if (!handleValidation(e)) return
    try {
      const response = await axiosAuth.post('/login', loginForm, {
        withCredentials: true
      })

      setSavedUsername(response.data.username)
      setUserDetails(response.data.user)

      console.log(response.data.user)

      if (response.status === 200) {
        toast.success('Login Success', {
          autoClose: 1000,
          onClose: () => navigate('/')
        })
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Server Error', {
        autoClose: 1000
      })
    }
  }

  // Google Authentication

  const handleGoogleAuth = async () => {
    try {
      const response = await axiosgGoogleAuth.post(
        '/google',
        { withCredentials: true },
        { token: response.credential }
      )
    } catch (error) {
      alert('Invalid user')
    }
  }

  return (
    <>
      <div className='lg:flex font-poppins'>
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />
        <div className='h-32 lg:w-[40vw] lg:h-[100vh] bg-violet-600 opacity-75 place-content-center'>
          <h1 className='lg:flex lg:place-content-center text-white lg:text-6xl lg:mb-32 font-Kaushan text-3xl flex place-content-center'>
            WorkBridge
          </h1>
        </div>
        <div className='lg:w-[60vw] lg:h-[100vh]  lg: flex flex-col items-center lg:pt-36 pt-4 bg-slate-100 '>
          <div className='flex flex-col place-items-center bg-white m-2 p-4 lg:p-8 rounded-md  shadow-lg'>
            <h1 className='text-2xl lg:text-3xl font-semibold  '>Login</h1>
            <form
              action=''
              className='flex flex-col place-items-center p-4 lg:pt-6 '
              onSubmit={handlelogin}
            >
              <input
                type='email'
                name='email'
                placeholder='Enter your email'
                onChange={handleOnchange}
                className='m-2 py-2 lg:m-2 lg:py-2 lg:px-11 rounded-md flex text-start outline-none border-2  border-gray-200 hover:border-violet-200 focus:border-violet-300'
              />
              {error.email && <p className='text-red-800'>{error.email}</p>}
              <input
                type='password'
                name='password'
                placeholder='Enter new password'
                onChange={handleOnchange}
                className='m-2 py-2 lg:m-2 lg:py-2 lg:px-11 rounded-md flex text-start outline-none border-2  border-gray-200 hover:border-violet-200 focus:border-violet-300'
              />
              {error.password && (
                <p className='text-red-800'>{error.password}</p>
              )}
              <button
                type='submit'
                className='m-2 py-2 px-7 bg-violet-500 rounded-md text-white mt-3 hover:bg-violet-600'
              >
                Login
              </button>
              <button
                onClick={() => navigate('/signup')}
                className='pt-4 hover:underline '
              >
                Create new account ?
              </button>

              <h1>or</h1>
              <div>
                <GoogleOAuthProvider clientId='283509074295-2c14a2o5saenni3ri9qgjl0l61rm47or.apps.googleusercontent.com'>
                  <GoogleLogin
                    onSuccess={handleGoogleAuth}
                    redirectUri="http://localhost:5001/auth/callback" 

                    onError={() => {
                      console.log('Login Failed')
                    }}
                  />
                </GoogleOAuthProvider>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login

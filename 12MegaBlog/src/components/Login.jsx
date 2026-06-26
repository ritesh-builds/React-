import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice' 
import {Button,Select, Input, Logo} from './index'
import { useDispatch } from 'react-redux'
import authService, { AuthService } from '../appwrite/auth'
import {useForm} from 'react-hook-form'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async (data) => {
      setError("")
      try {
          const session = await AuthService.login(data)
          if(session){
            const userData = await authService.getCurrentuser()
            if(userData) dispatch(authLogin(userData))
            navigate("/")
          }
      } catch (error) {
        setError(error.message)
      }
    }

  return (
    <div
    className='flex items-center justify-center w-full'
    >
      <div className='mx-auto w-full max-w-full bg-gray-100 rounded-xl p-10 border-black/10'>
        <div className='mb-2 flex justify-center'>
            <span className='inline-block w-full max-w-[100]'>
                <Logo width='100%'/>
            </span>
        </div>
        <h2 className='text-center text-2xl font-bold leading-tight'>Sign in to your account</h2>
        <p className='mt-2 text-center text-base text-black/60'>
            Don&apos; have any account?&nbsp;
            <Link
                to="/signup"
                className='font-medium text-primary transition-all duration-200 hover:underline'
            >
                Sign Up 
            </Link>
        </p>
        {error && <p className='text-red-600 text-center mt-8' > {error} </p>}
        <form onSubmit={handleSubmit(login)}
        className='mt-8 '>
            <div className='space-y-5'>
                <Input 
                    label="Email: "
                    placeholder="Enter your email"
                    type="email"
                    {...register("email", {
                        required: true,
                        validate: {
                            matchPattern: (value) => {
                                const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                return pattern.test(value) || "Please enter a valid email";
                            }
                        },
                        unique: true
                    })}
                />
                <Input 
                    label="Password: "
                    placeholder="Enter your password"
                    type="password"
                    {...register("password", {
                        required: true,
                        minLength: 6
                    })}
                />
                <Button type='submit' className='w-full'>Sign Up</Button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login

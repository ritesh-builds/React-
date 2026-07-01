import React, {useState} from 'react'
import {Link, Navigate} from 'react-router-dom'
import {Button,Select, Input, Logo} from './index'
import {login as authLogin} from '../store/authSlice'
import { useState } from 'react'
import {button, Input, Logo} from './index'
import { useDispatch } from 'react-redux'
import {useForm} from 'react-hook-form'

function SignUp() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)   

    const create =  async (data) => {
        setError("")
        try{
            const userData = await service.createAccount(data);
            if(userData){
                const userData = await authService.getCurrentUser(data)
                if(userData) dispatch(authLogin(userData))
                    navigate("/")

            }
        } catch(error){
            setError(error.message)
        }
    }

  return (
    <div className='flex items-center justify-center'>
      <div className=' mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border-black/10'>
        <div className='mb-2 flex justify-center'>
            <span class-Name='inline-block w-full max-w-[100px]'>
                <Logo width='100%'/>
            </span>
        </div>
        <h2 className='text-center text-2xl font-bold leading-light'> 
            Sign Up to create account
        </h2>
            <p className='text-gray-600 mt-2 text-center text-base text-black/60' >
                Already have an account?&nbsp <Link to="/login" className="font-medium text-primary transition-all duration-200 hover:underline">Sign In</Link>
            </p>
            {error && <p className='text-red-600 text-center mt-8' > {error} </p>}
            <form onSubmit={handleSubmit(create)} className='mt-8'>
                <div className='space-y-5'>
                    <Input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        {...register("name", {required: true})}
                    />
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
                                    {...register("password", {required: true})}
                                />
                                <Button
                                    type="submit"
                                    className='w-full'
                                >Create Account
                                
                            </Button>
                    </div>
            </form>
      </div>
    </div>
  )
}

export default SignUp

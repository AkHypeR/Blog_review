import React from 'react'
import authservice from '../appwrite/auth'
import { login as authLogin } from '../store/authSlice'
import { useForm } from 'react-hook-form'
import { Button, Input, Logo } from './index'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'


function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState("")
    const { register, handleSubmit } = useForm()
    const login = async (data) => {
        setError("")
        try {
            const session = await authservice.login(data)
            if (session) {
                const userData = authservice.getUser()
                if (userData) {
                    dispatch(authLogin(userData))
                    navigate('./')

                }

            }

        } catch (error) {
            setError(error.massage)
        }
    }




    return (
        <div className='flex items-center justify-center w-full'>
            <div className="mb-2 flex justify-center">
                <span className="inline-block w-full max-w-[100px]">
                    <Logo width="100%" />
                </span>
            </div>

            <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                Don&apos;t have any account?&nbsp;
                <Link
                    to="/signup"
                    className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                    Sign Up
                </Link>
            </p>

            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form onSubmit={handleSubmit(login)}>
                <Input
                    label="email"
                    type="email"
                    placeholder="Enter your email address"
                    {...register("email", {
                        required: true,
                        validate: {
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                        }
                    })}
                />
                <Input
                    label="password"
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", {
                        required: true,
                    })}
                />
                <Button
                    type="submit"
                    className="w-full"
                >Sign in</Button>


            </form >


        </div >
    )
}

export default Login
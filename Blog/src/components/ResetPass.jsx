import React from 'react'
import authservice from '../appwrite/auth'
import { useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Button, Input, Logo } from './index'



function ResetPass() {

    //const [error, setError] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()

    const reset=async() => {
        
        try {
            await authservice.resetPassword(data)
        } catch (error) {
            
        }

    }


  return (
    <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <form  onSubmit={handleSubmit(reset)} >
                 <Input
                        label="Repeat password"
                        type="password"
                        placeholder="Enter your password"
                        {...register("reppassword", {
                            required: true,
                        })}
                        />
                    
                    <Button
                        type="submit"
                        className="w-full"
                    >Sign in</Button>


                </form >


            </div >
        </div >

  )
}

export default ResetPass
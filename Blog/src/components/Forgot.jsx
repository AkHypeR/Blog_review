    import React from 'react';
    import { useForm } from 'react-hook-form';
    import { Button, Logo, Input } from './index';
    import authservice from '../appwrite/auth';
    import { ToastContainer, toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';

    function Forgot() {
    const { register, handleSubmit } = useForm();

    const forgotHandler = async (data, e) => {
        e.preventDefault();
        try {
        await authservice.forgotPassword(data);
        toast.success('Password reset email sent successfully!');
        } catch (error) {
        toast.error('Failed to send password reset email.');
        }
    };

    return (
        <div className="flex items-center justify-center">
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
            <span className="inline-block w-full max-w-[100px]">
                <Logo width="100%" />
            </span>
            </div>
            <form onSubmit={handleSubmit(forgotHandler)}>
            <Input
                label="email"
                type="email"
                placeholder="Enter your email address"
                {...register("email", {
                required: 'Email is required',
                pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: 'Email address must be a valid address'
                }
                })}
            />
            <Button
                type="submit"
                className="w-full"
            >
                Send Reset Email
            </Button>
            </form>
        </div>
        <ToastContainer />
        </div>
    );
    }

    export default Forgot;

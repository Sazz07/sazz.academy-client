import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Signup = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src='https://i.ibb.co/Lt489hg/7176-Online-Education.webp' alt="" />
            </div>
            <div className='flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-300 p-8 px-8 shadow-lg'>
                    <h2 className='text-4xl dark:text-white font-bold text-center'>Sign Up</h2>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                        <p className="px-3 text-sm dark:text-gray-400">Sign Up with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    </div>
                    <div className='flex justify-between pt-4'>
                        <button type="button" className="px-8 py-3 font-semibold border rounded border-gray-700 text-gray-700 hover:bg-gray-400"><FaGoogle className='inline'></FaGoogle> Google</button>
                        <button type="button" className="px-8 py-3 font-semibold border rounded border-gray-700 text-gray-700 hover:bg-gray-400"><FaGithub className='inline'></FaGithub> Github</button>
                    </div>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                        <p className="px-3 text-sm dark:text-gray-400">OR</p>
                        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    </div>
                    <div className='flex flex-col text-gray-600 py-2'>
                        <label>Full Name</label>
                        <input className='rounded-lg shadow-sm bg-fuchsia-100 mt-2 p-2 focus:border-blue-500 focus:bg-gray-200 focus:outline-none' type="text" name='name' placeholder='Enter Your Name' />
                    </div>
                    <div className='flex flex-col text-gray-600 py-2'>
                        <label>Photo URL</label>
                        <input className='rounded-lg shadow-sm bg-fuchsia-100 mt-2 p-2 focus:border-blue-500 focus:bg-gray-200 focus:outline-none' type="text" name='photoURL' placeholder='Enter Your Photo URL' required />
                    </div>
                    <div className='flex flex-col text-gray-600 py-2'>
                        <label>Email</label>
                        <input className='rounded-lg shadow-sm bg-fuchsia-100 mt-2 p-2 focus:border-blue-500 focus:bg-gray-200 focus:outline-none' type="email" name='email' placeholder='Enter Your Email' required />
                    </div>
                    <div className='flex flex-col text-gray-600 py-2'>
                        <label>Password</label>
                        <input className='p-2 shadow-sm rounded-lg bg-fuchsia-100 mt-2 focus:border-blue-500 focus:bg-gray-200 focus:outline-none' type="password" name='password' placeholder='Enter Your Password' required />
                    </div>
                    <div className='text-gray-600 py-2'>
                        <p className=''><input className='mr-2' type="checkbox" />Show Password</p>
                        <p className=''><input className='mr-2' type="checkbox" />Accept Terms & Conditions</p>
                    </div>
                    <button className='w-full my-5 py-2 bg-violet-500 hover:bg-violet-700 text-white font-semibold rounded-lg' type='submit'>Sign Up</button>
                    <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
                        <Link to='/login' className="underline dark:text-gray-100"> Log in</Link>
                    </p>

                </form>
            </div>
        </div>
    );
};

export default Signup;
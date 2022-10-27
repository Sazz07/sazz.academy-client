import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if(user.emailVerified){
                    navigate(from, {replace: true});
                }
                else {
                    alert('Your Email is not Verified. Please verify your Email');
                }

            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src='https://i.ibb.co/Q6jrSRC/61f58dace4caac4a10db955d-Distance-Learning-Statistics.png' alt="" />
            </div>

            <div className='bg-gray-100 flex flex-col justify-center'>
                <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-300 p-8 px-8 shadow-lg'>
                    <h2 className='text-4xl dark:text-white font-bold text-center'>Log In</h2>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                        <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
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
                        <label>Email</label>
                        <input className='rounded-lg shadow-sm bg-fuchsia-100 mt-2 p-2 focus:border-blue-500 focus:bg-gray-200 focus:outline-none' type="email" name='email' placeholder='Please Enter Your Email' required />
                    </div>
                    <div className='flex flex-col text-gray-600 py-2'>
                        <label>Password</label>
                        <input className='p-2 shadow-sm rounded-lg bg-fuchsia-100 mt-2 focus:border-blue-500 focus:bg-gray-200 focus:outline-none' type="password" name='password' placeholder='Please Enter Your Password' required />
                    </div>
                    <div className='text-gray-600 py-2'>
                        <p className=''><input className='mr-2' type="checkbox" />Show Password</p>
                    </div>
                    <button className='w-full my-5 py-2 bg-violet-500 hover:bg-violet-700 text-white font-semibold rounded-lg' type='submit'>Log In</button>
                    <p className='text-red-500 font-medium text-center'>{error}</p>
                    <p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
                        <Link to='/signup' className="underline dark:text-gray-100"> Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
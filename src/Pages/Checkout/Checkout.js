import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Checkout = () => {
    const courses = useLoaderData();
    const { user } = useContext(AuthContext);
    return (
        <section className="mt-6 text-gray-700">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="rounded-lg shadow-md block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-300">
                    <img src={courses.image_url} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
                    <div className="p-12 space-y-5 lg:col-span-5">
                        <h3 className="text-xl font-semibold sm:text-4xl">Thank You <span className='text-yellow-500'>{user?.displayName} </span>
                        <span className='text-red-700'></span></h3>
                        <p>For becoming a premium member. You have selected- <br /><br /> <span className='font-medium text-red-700'>Course: <span className='text-lg text-violet-700'>{courses.title}.</span></span></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Checkout;
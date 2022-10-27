import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CoursesCard from './CoursesCard';

const Courses = () => {
    const categories = useLoaderData();
    return (
        <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='my-7'>
                <h2 className='text-center text-4xl text-violet-600 font-bold'>Welcome to Our Course Section</h2>
                <p className='text-center text-lg font-semibold text-red-500'>Please Select your desire course to start learning</p>
            </div>
            <div className='grid lg:grid-cols-4 gap-10 md:grid-cols-2 sm:row-gap-6 sm:grid-cols-1'>
                <div className='mx-auto'>
                    <aside className="w-full lg:h-3/5 p-6 rounded-md shadow-lg md:h-auto sm:w-60 bg-purple-200 text-gray-900">
                        <nav className="space-y-8 text-sm">
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold tracking-widest uppercase text-gray-500 pt-3 text-center">Total Courses: {categories.length}</h2>
                                <div className="flex flex-col space-y-2 text-center text-sm">
                                    {
                                        categories.map(category => <p
                                            key={category.id}
                                        ><Link to={`/category/${category.id}`}>{category.name}</Link></p>)
                                    }
                                </div>
                            </div>
                        </nav>
                    </aside>
                </div>
                <div className='col-span-3'>
                    <div className='grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                        {
                            categories.map(category => <CoursesCard
                                key={category.id}
                                category={category}
                            ></CoursesCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;
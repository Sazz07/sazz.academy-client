import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from './CourseDetails';

const Category = () => {
    const courses = useLoaderData();
    return (
        <div className='mt-6'>
            <div className='my-2 max-w-xl mx-auto flex lg:flex-row  justify-between md:flex-col sm:flex-col'>
                <h2 className='text-2xl font-bold text-purple-600'>Welcome To Your Selected Course</h2>
            </div>
            <div>
                {
                    courses.map(course => <CourseDetails
                        key={course._id}
                        course={course}
                    ></CourseDetails>)
                }
            </div>
        </div>
    );
};

export default Category;
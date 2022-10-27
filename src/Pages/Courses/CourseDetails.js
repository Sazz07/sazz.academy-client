import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetails = ({ course }) => {
    // console.log(course);
    const { _id, title, instructor, details, image_url, requirement, rating, total_student } = course;
    return (
        <div className="my-8 mx-auto max-w-xl p-4 shadow-lg bg-gray-200 text-violet-700 rounded-md">
            <div className="pb-4 border-bottom bg-gray-300 p-4 rounded-md">
                <div className="">
                    <p className="mb-0 capitalize text-violet-700 font-semibold text-xl">{title}</p>
                </div>
            </div>
            <div className="space-y-4 py-3">
                <div className="space-y-2">
                    <img src={image_url} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                </div>
                <div className="space-y-2">
                    <div className='flex items-center bg-gray-300 p-2 rounded-md'>
                        <img alt="" className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700" src={instructor.img} />
                        <p className='px-2 font-medium'><span className='text-red-700 text-base'>Instructor:</span>  {instructor.name}</p>
                    </div>
                    <p className="leading-snug text-gray-500"><span className='font-medium text-gray-600'>Description:</span> {details}</p>
                    <p className="leading-snug text-gray-500"><span className='font-medium text-gray-600'>Requirement:</span> {requirement}</p>
                </div>
                <Link to={`/courses/${_id}`}>
                    <button className='w-full my-5 py-2 bg-yellow-500 hover:bg-orange-700 text-white font-semibold rounded-lg' type='submit'>Get Premium Access.</button>
                </Link>
            </div>
        </div>
    );
};

export default CourseDetails;
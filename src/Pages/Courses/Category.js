import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from './CourseDetails';
import Pdf from "react-to-pdf";

const ref = React.createRef();
const options = {
    orientation: 'landscape',
    unit: 'in',
};

const Category = () => {
    const courses = useLoaderData();
    return (
        <div className='mt-6'>
            <div className='my-2 max-w-xl mx-auto flex lg:flex-row  justify-between md:flex-col sm:flex-col'>
                <h2 className='text-2xl font-bold text-purple-600'>Welcome To Your Selected Course</h2>
                <Pdf targetRef={ref} filename="course.pdf" options={options} x={.3} y={.5} scale={0.8}>
                    {({ toPdf }) => <button onClick={toPdf} type="button" className="relative px-8 py-3 ml-4 overflow-hidden font-semibold rounded bg-red-700 text-gray-200">Save as Pdf
                        <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-yellow-500">Pdf</span>
                    </button>}
                </Pdf>
            </div>
            <div ref={ref}>
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
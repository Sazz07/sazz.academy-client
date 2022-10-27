import React from 'react';
import { Link } from 'react-router-dom';

const CoursesCard = ({ category }) => {
    const { name, img } = category;
    return (
        <div className="max-w-xs rounded-md shadow-lg bg-sky-200 text-gray-900">
            <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-60 bg-gray-500" />
            <div className="flex flex-col justify-between p-4 space-y-4">
                <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-wide">{name}</h2>
                </div>
                <Link to={`/category/${category.id}`}>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">Read more</button>
                </Link>
            </div>
        </div>
    );
};

export default CoursesCard;
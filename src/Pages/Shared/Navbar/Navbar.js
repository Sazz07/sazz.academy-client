import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaBook } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut, check, handleCheck } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className={!check ? "bg-gray-200" : "bg-gray-400"}>
            <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                <div className='relative flex items-center justify-between'>
                    <Link
                        to='/'
                        aria-label='SazzAcademy'
                        title='SazzAcademy'
                        className='inline-flex items-center'
                    >
                        <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>
                            <FaBook className='inline text-orange-400'></FaBook>  SazzAcademy
                        </span>
                    </Link>
                    <ul className='flex items-center hidden space-x-8 lg:flex'>
                        <li>
                            <NavLink
                                to='/home'
                                aria-label='home'
                                title='home'
                                className={({ isActive }) =>
                                    isActive
                                        ? 'font-medium tracking-wide text-violet-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                        : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/courses'
                                aria-label='Courses'
                                title='Courses'
                                className={({ isActive }) =>
                                    isActive
                                        ? 'font-medium tracking-wide text-violet-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                        : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                }
                            >
                                Courses
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/faq'
                                aria-label='FAQ'
                                title='FAQ'
                                className={({ isActive }) =>
                                    isActive
                                        ? 'font-medium tracking-wide text-violet-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                        : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                }
                            >
                                FAQ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/blog'
                                aria-label='Blog'
                                title='Blog'
                                className={({ isActive }) =>
                                    isActive
                                        ? 'font-medium tracking-wide text-violet-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                        : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                }
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <label htmlFor="Toggle4" className="inline-flex items-center p-1 cursor-pointer bg-gray-300 text-gray-800 rounded-lg">
                                <input onClick={handleCheck} id="Toggle4" type="checkbox" className="hidden peer" />
                                <span className="px-4 py-2 rounded-lg bg-gray-500 peer-checked:bg-gray-300">Light</span>
                                <span className="px-4 py-2 rounded-lg bg-gray-300 peer-checked:bg-violet-500">Dark</span>
                            </label>
                        </li>
                        {
                            user?.uid
                                ?
                                <>
                                    <li>
                                        <div title='Log Out'>
                                            <button onClick={handleLogOut} type="button" className="px-4 py-2 font-semibold rounded-lg bg-rose-400 text-gray-700">Log Out</button>
                                        </div>
                                    </li>
                                    <li>
                                        <Link className='' title={user?.displayName}>
                                            {user?.photoURL ?
                                                <img alt="" className="w-10 h-10 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" src={user?.photoURL} />
                                                :
                                                <img alt="" className="w-10 h-10 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-green-600 ring-offset-gray-800" src="https://i.ibb.co/64xqzfP/dummy-user.png" />
                                            }

                                        </Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <NavLink
                                            to='/login'
                                            aria-label='Login'
                                            title='Login'
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'font-medium tracking-wide text-violet-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                    : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                            }
                                        >
                                            Log in
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to='/signup'
                                            aria-label='Signup'
                                            title='Signup'
                                        >
                                            <button type="button" className="px-4 py-2 font-semibold rounded-lg bg-violet-400 text-gray-700">Sign Up</button>
                                        </NavLink>
                                    </li>
                                </>
                        }
                    </ul>
                    <div className='lg:hidden'>
                        <button
                            aria-label='Open Menu'
                            title='Open Menu'
                            className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                <path
                                    fill='currentColor'
                                    d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                                />
                                <path
                                    fill='currentColor'
                                    d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                                />
                                <path
                                    fill='currentColor'
                                    d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className='absolute top-0 left-0 w-full'>
                                <div className='p-5 bg-white border rounded shadow-sm'>
                                    <div className='flex items-center justify-between mb-4'>
                                        <div>
                                            <Link
                                                to='/'
                                                aria-label='SazzAcademy'
                                                title='SazzAcademy'
                                                className='inline-flex items-center'
                                            >
                                                <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>
                                                    SazzAcademy
                                                </span>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label='Close Menu'
                                                title='Close Menu'
                                                className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                                    <path
                                                        fill='currentColor'
                                                        d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className='space-y-4'>
                                            <li>
                                                <Link
                                                    to='/courses'
                                                    aria-label='Courses'
                                                    title='Courses'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                >
                                                    Courses
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/faq'
                                                    aria-label='Faq'
                                                    title='Faq'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                >
                                                    Faq
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/blog'
                                                    aria-label='Blog'
                                                    title='Blog'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                >
                                                    Blog
                                                </Link>
                                            </li>
                                            {
                                                user?.uid
                                                    ?
                                                    <>
                                                        <li>
                                                            <div title='Log Out'>
                                                                <button type="button" className="px-4 py-2 font-semibold rounded-lg bg-rose-400 text-gray-700">Log Out</button>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <Link className='' title={user?.displayName}>
                                                                {user?.photoURL ?
                                                                    <img alt="" className="w-10 h-10 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" src={user?.photoURL} />
                                                                    :
                                                                    <img alt="" className="w-10 h-10 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-green-600 ring-offset-gray-800" src="https://i.ibb.co/64xqzfP/dummy-user.png" />
                                                                }

                                                            </Link>
                                                        </li>
                                                    </>
                                                    :
                                                    <>
                                                        <li>
                                                            <Link
                                                                to='/login'
                                                                aria-label='Login'
                                                                title='Login'
                                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                            >
                                                                Log in
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to='/signup'
                                                                aria-label='Signup'
                                                                title='Signup'
                                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                            >
                                                                <button className='px-4 py-2 font-semibold rounded-lg bg-violet-400 text-gray-700"'>Sign up</button>
                                                            </Link>
                                                        </li>
                                                    </>
                                            }


                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
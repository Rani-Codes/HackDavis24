"use client";
import React, { useState } from 'react'

export const Navbar = () => {
    const [isClick, setisClick] = useState(false);

    const toggleNavbar = (): void => {
        setisClick(!isClick)
    };
  return (
    <nav className='bg-bannerColor sticky sticky top-0 z-50'>
        <div className='pl-14 pr-10'>
            <div className='flex items-center justify-between h-16'>
                <div className='flex items-center'>
                <div className='flex-shrink-0'>
                    <a href="/" className='block'>
                        <p>Home</p>
                    </a>
                </div>
                </div>
                <div className='hidden md:block'>
                    <div className='ml-4 flex items-center space-x-4'>
                    <a href='/login-page' className='text-stone-600 text-sm font-light rounded-lg p-2 hover:transform hover:scale-105 transition-transform duration-300'>Login</a>
                    </div>
                </div>

                <div className='md:hidden flex items-center'>
                    <button className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                    onClick={toggleNavbar}>
                        {isClick ? (
                            <svg
                            className='h-6 w-6'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            >
                                <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                                /> 
                            </svg>
                        ) : (
                            <svg
                             className='h-6 w-6'
                             xmlns='http://www.w3.org/2000/svg'
                             fill='none'
                             viewBox='0 0 24 24'
                             stroke='currentColor'
                             >
                                <path
                                 strokeLinecap='round'
                                 strokeLinejoin='round'
                                 strokeWidth={2}
                                 d='M4 6h16M4 12h16m-7 6h7'
                                />
                             </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
        {isClick && (
            <div className='md:hidden'>
                <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                    <a href='/login-page' className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>Schedule</a>
                </div>
            </div>
        )}
    </nav>    
  )
}

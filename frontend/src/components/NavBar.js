import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className='relative bg-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <NavLink to='/'>
              <img src='./book-logo-png-13.png' alt='' />
            </NavLink>
          </div>

          <nav className='hidden space-x-10 md:flex'>
            <NavLink
              to='dashboard'
              className={({ isActive }) =>
                isActive ? ' font-semibold' : undefined
              }
            >
              dashboard
            </NavLink>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? ' font-semibold' : undefined
              }
            >
              Home
            </NavLink>

            <a
              href='#'
              className='text-base font-medium text-gray-500 hover:text-gray-900'
            >
              <MdShoppingCart />
            </a>
          </nav>
          <div className='hidden items-center justify-end md:flex md:flex-1 lg:w-0'>
            <a
              href='#'
              className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
            >
              Sign in
            </a>
            <a
              href='#'
              className='ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
      <div className='absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden'>
        <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
          <div className='px-5 pt-5 pb-6'>
            <div className='flex items-center justify-between'>
              <div>
                <img
                  className='h-8 w-auto'
                  src='./book-logo-png-13.png'
                  alt='Your Company'
                />
              </div>
              <div className='-mr-2'>
                <button
                  type='button'
                  className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                >
                  <span className='sr-only'>Close menu</span>
                </button>
              </div>
            </div>
            <div className='mt-6'>
              <nav className='grid gap-y-8'></nav>
            </div>
          </div>
          <div className='space-y-6 py-6 px-5'>
            <div className='flex flex-col items-center gap-y-4 gap-x-8'>
              <NavLink
                to='/'
                className='text-base font-medium text-gray-900 hover:text-gray-700'
              >
                Guides
              </NavLink>

              <NavLink
                to='/'
                className='text-base font-medium text-gray-900 hover:text-gray-700'
              >
                Events
              </NavLink>

              <NavLink
                to='/'
                className='text-base font-medium text-gray-900 hover:text-gray-700'
              >
                Security
              </NavLink>
            </div>
            <div>
              <NavLink
                to='/'
                className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
              >
                Sign up
              </NavLink>
              <p className='mt-6 text-center text-base font-medium text-gray-500'>
                Existing customer?
                <NavLink
                  to='/'
                  className='text-indigo-600 hover:text-indigo-500'
                >
                  Sign in
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

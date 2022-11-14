import React from 'react';
import { Link } from 'react-router-dom';
import { ImBooks } from 'react-icons/im';
import { MdDashboard } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
function Aside() {
  return (
    <div id='view' className='h-full  flex flex-row'>
      <div
        id='sidebar'
        className='bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out'
      >
        <div className='space-y-6 md:space-y-10 mt-10'>
          <h1 className='hidden md:block font-bold text-sm md:text-xl text-center'>
            DashBoard<span className='text-teal-600'>.</span>
          </h1>
          <div id='profile' className='space-y-3'>
            <img
              src=''
              alt='Avatar user'
              className='w-10 md:w-16 rounded-full mx-auto'
            />
            <div>
              <h2 className='font-medium text-xs md:text-sm text-center text-teal-500'>
                Eduard Pantazi
              </h2>
              <p className='text-xs text-gray-500 text-center'>Administrator</p>
            </div>
          </div>

          <div id='menu' className='flex  flex-col space-y-2'>
            <Link className='flex items-center text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out'>
              <MdDashboard className='text-lg' />
              <span>Dashboard</span>
            </Link>
            <Link
              to='books'
              className=' flex text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out'
            >
              <ImBooks className='text-lg' />
              <span>Books</span>
            </Link>

            <Link
              to='users'
              className='flex items-center text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out'
            >
              <FaUsers className='text-lg' />
              <span>Users</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aside;

import React from 'react';
import { Link } from 'react-router-dom';

function TableFrame({ children }) {
  return (
    <div className='bg-white p-8 rounded-md w-full'>
      <div className=' flex items-center justify-between pb-2'>
        <div className='flex items-center justify-between'>
          <Link
            to='new'
            className='bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer'
          >
            Create
          </Link>
        </div>
      </div>
      <div>
        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
          <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableFrame;

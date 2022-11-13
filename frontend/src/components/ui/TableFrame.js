import React from 'react';

function TableFrame({ children }) {
  return (
    <div className='max-w-2xl mx-auto'>
      <div className='flex flex-col'>
        <div className='overflow-x-auto shadow-md sm:rounded-lg'>
          <div className='inline-block min-w-full align-middle'>
            <div className='overflow-hidden '>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableFrame;

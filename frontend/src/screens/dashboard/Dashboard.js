import React from 'react';
import { Outlet } from 'react-router-dom';
import Aside from './aside';
function Dashboard() {
  return (
    <div className='flex'>
      <div className='mr-5'>
        <Aside />
      </div>
      <Outlet />
    </div>
  );
}

export default Dashboard;

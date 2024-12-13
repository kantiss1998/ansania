// layouts/CMSLayout.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

const CMSLayout = () => {
  const location = useLocation();

  const isCMS = location.pathname.startsWith('/admin');

  return (
    <div className="flex">
      {isCMS && <Sidebar />}
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default CMSLayout;

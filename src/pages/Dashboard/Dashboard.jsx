import React from 'react';
import { Navigate } from 'react-router-dom';

import Layout from '@components/Layout';

import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return user?.token ? (
    <Layout>
      <div className="flex justify-center w-full h-[80vh] items-center">
        <h1 className="text-6xl font-bold">Dashboard</h1>
      </div>
    </Layout>
  ) : (
    <Navigate to={`/`} />
  );
};

export default Dashboard;

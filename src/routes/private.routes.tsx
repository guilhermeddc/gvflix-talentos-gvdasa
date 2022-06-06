import React, {lazy, Suspense} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

const Dashboard = lazy(() => import('pages/Dashboard'));

export const PrivateRoutes: React.FC = () => {
  return (
    <Suspense fallback={<>loading...</>}>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

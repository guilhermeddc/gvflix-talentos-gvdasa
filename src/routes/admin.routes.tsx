import React, {lazy, Suspense} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import {LinearDeterminate} from 'shared/components';

const Dashboard = lazy(() => import('pages/Dashboard'));

export const AdminRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LinearDeterminate />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

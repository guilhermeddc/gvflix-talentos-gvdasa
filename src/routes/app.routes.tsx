import React, {lazy, Suspense} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<>loading...</>}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

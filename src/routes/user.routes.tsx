import React, {lazy, Suspense} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import {LinearDeterminate} from 'shared/components';

const Home = lazy(() => import('pages/Home'));
const Profile = lazy(() => import('pages/Profile'));

export const UserRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LinearDeterminate />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meu-perfil" element={<Profile />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

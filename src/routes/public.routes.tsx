import React, {lazy, Suspense} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));

export const PublicRoutes: React.FC = () => {
  return (
    <Suspense fallback={<>loading...</>}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registrar" element={<Register />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

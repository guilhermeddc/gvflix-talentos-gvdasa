import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Route, Routes as Router} from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Router>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Router>
      </Suspense>
    </BrowserRouter>
  );
};

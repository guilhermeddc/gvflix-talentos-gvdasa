import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import {useAuth} from 'shared/hooks';

import {AdminRoutes} from './admin.routes';
import {PublicRoutes} from './public.routes';
import {UserRoutes} from './user.routes';

export const Routes: React.FC = () => {
  const {isAuthenticated, role} = useAuth();

  const Route =
    isAuthenticated && role === 1
      ? AdminRoutes
      : isAuthenticated && role === 2
      ? UserRoutes
      : PublicRoutes;

  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
};

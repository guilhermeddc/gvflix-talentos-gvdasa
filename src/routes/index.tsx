import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import {useAuth} from 'shared/hooks';

import {AppRoutes} from './app.routes';
import {PrivateRoutes} from './private.routes';
import {PublicRoutes} from './public.routes';

export const Routes: React.FC = () => {
  const {isAuthenticated, role} = useAuth();

  const Route =
    isAuthenticated && role === 1
      ? PrivateRoutes
      : isAuthenticated && role === 2
      ? AppRoutes
      : PublicRoutes;

  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
};

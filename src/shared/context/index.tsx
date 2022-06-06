import React from 'react';

import {AuthProvider} from './auth';

interface IProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<IProps> = ({children}) => {
  return <AuthProvider>{children}</AuthProvider>;
};

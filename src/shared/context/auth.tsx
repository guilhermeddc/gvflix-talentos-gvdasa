import React, {createContext, useCallback, useState} from 'react';

import {authService} from 'shared/services/api/auth';
import {IUser} from 'shared/services/api/user';

export interface IAuthContext {
  isAuthenticated: boolean;
  signIn: (email: string, senha: string) => Promise<void>;
  user: IUser | undefined;
  role: number | undefined;
}

export const AuthContext = createContext<IAuthContext>({
  isAuthenticated: false,
} as IAuthContext);

interface IProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<IProps> = ({children}) => {
  const [user, setUser] = useState<IUser | undefined>();
  const [role, setRole] = useState<number | undefined>();

  const signIn = useCallback(async (email: string, senha: string) => {
    const response = await authService.signIn(email, senha);

    if (response.codigoUsuario) {
      setRole(response.role);
      setUser(response);
    }
  }, []);

  return (
    <AuthContext.Provider value={{isAuthenticated: !!user, signIn, role, user}}>
      {children}
    </AuthContext.Provider>
  );
};

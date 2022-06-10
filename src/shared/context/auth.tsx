import React, {createContext, useCallback, useState} from 'react';

import {authService} from 'shared/services/api/auth';
import {IUser} from 'shared/services/api/user';

export interface IAuthContext {
  isAuthenticated: boolean;
  signIn: (email: string, senha: string) => Promise<void>;
  signOut: () => void;
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
  const [user, setUser] = useState<IUser | undefined>(() => {
    const userStorage = localStorage.getItem('@gvflix.user');

    if (userStorage) return JSON.parse(userStorage);
    return undefined;
  });

  const signIn = useCallback(async (email: string, senha: string) => {
    const response = await authService.signIn(email, senha);

    if (response.codigoUsuario) {
      localStorage.setItem('@gvflix.user', JSON.stringify(response));

      setUser(response);
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@gvflix.user');

    setUser(undefined);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        signIn,
        signOut,
        role: user?.role,
        user,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

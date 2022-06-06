import {api} from 'shared/services/axios';

import {IUser} from '../user';

const signIn = async (email: string, senha: string): Promise<IUser> => {
  try {
    const response = await api.post<IUser>('/usuarios/Logar', {
      email,
      senha,
    });

    return response.data;
  } catch (error) {
    throw new Error('Não foi possível fazer o login');
  }
};

export const authService = {signIn};

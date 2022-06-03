import {api} from 'services/axios';

const signIn = async (email: string, senha: string) => {
  const response = await api.post('/usuarios/Logar', {
    email,
    senha,
  });

  return response;
};

export const authService = {signIn};

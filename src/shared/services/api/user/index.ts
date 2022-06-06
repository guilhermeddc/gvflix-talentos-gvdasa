import {api} from 'shared/services/axios';

export interface IUser {
  codigoUsuario: number;
  dataNascimento: Date | string;
  email: string;
  nome: string;
  senha: string | null;
  role: number;
}

const userCreate = async (
  user: Omit<IUser, 'codigoUsuario, role, dataNascimento'>,
): Promise<void> => {
  try {
    await api.post('/usuarios', {
      ...user,
      codigoUsuario: 0,
      role: 2,
    });
  } catch (error) {
    throw new Error('Não foi possível criar o usuário');
  }
};

export const userService = {userCreate};

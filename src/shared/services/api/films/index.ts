import {api} from 'shared/services/axios';

export interface IFilm {
  codigoFilme: number;
  titulo: string;
  descricao: string;
  urlImagem: string;
}

const getFilms = async (): Promise<IFilm[]> => {
  const response = await api.get<IFilm[]>('/filmes');

  return response.data;
};

const createFilm = async (film: IFilm): Promise<IFilm> => {
  const payload = {
    codigoUsuarioLogado: 1,
    dto: {
      codigoFilme: 0,
      titulo: film.titulo,
      descricao: film.descricao,
      urlImagem: film.urlImagem,
      filmesAtores: [],
    },
  };

  const response = await api.post<IFilm>('/filmes', payload);

  return response.data;
};

export const filmsService = {getFilms, createFilm};

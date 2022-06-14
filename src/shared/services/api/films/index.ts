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

const updateFilm = async (film: IFilm): Promise<IFilm> => {
  const payload = {
    codigoUsuarioLogado: 1,
    dto: {
      codigoFilme: film.codigoFilme,
      titulo: film.titulo,
      descricao: film.descricao,
      urlImagem: film.urlImagem,
      filmesAtores: [],
    },
  };

  const response = await api.put<IFilm>(`/filmes/${film.codigoFilme}`, payload);

  return response.data;
};

const deleteFilm = async (codigoFilme: number): Promise<void> => {
  await api.delete(`/filmes/${codigoFilme}`);
};

export const filmsService = {getFilms, createFilm, deleteFilm, updateFilm};

import React from 'react';

import {Container, ListFilms} from 'shared/components';

export const FilmCatalog: React.FC = () => {
  return (
    <Container paddingLeft={false}>
      <ListFilms title="Veja novamente" />
      <ListFilms title="Veja novamente" />
      <ListFilms title="Veja novamente" />
      <ListFilms title="Veja novamente" />
      <ListFilms title="Veja novamente" />
      <ListFilms title="Veja novamente" />
      <ListFilms title="Veja novamente" />
    </Container>
  );
};

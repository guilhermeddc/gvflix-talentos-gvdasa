import React from 'react';

import {Stack} from '@mui/material';
import {morbius} from 'shared/assets';
import {NavBar} from 'shared/components';

import {FilmCatalog, Preview} from './modules';

const Home: React.FC = () => {
  return (
    <Stack
      sx={{
        height: '100vh',
        width: '100%',
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), linear-gradient(180deg, rgba(0, 0, 0, 0) 49.93%, #000000 96.57%), url(${morbius})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}>
      <NavBar />
      <Preview />
      <FilmCatalog />
    </Stack>
  );
};

export default Home;

import React, {useCallback, useEffect, useState} from 'react';

import {ArrowForwardIos} from '@mui/icons-material';
import {Box, Stack, Typography} from '@mui/material';
import {filmsService, IFilm} from 'shared/services/api/films';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {Film} from './Film';

interface IProps {
  title: string;
}

export const ListFilms: React.FC<IProps> = ({title}) => {
  const [data, setData] = useState<IFilm[]>([]);

  const handleGetFilms = useCallback(async () => {
    const response = await filmsService.getFilms();

    setData(response);
  }, []);

  useEffect(() => {
    handleGetFilms();
  }, [handleGetFilms]);

  return (
    <Stack>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        ml={{xs: 3, sm: 5}}>
        <Typography fontSize={20} fontWeight={700}>
          {title}
        </Typography>
        <ArrowForwardIos sx={{width: 16}} />
      </Stack>

      <Box marginY={3} ml={{xs: 1, sm: 3}}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={170}
          slidesPerView={6}
          navigation
          scrollbar={{draggable: true}}>
          {data.map((film) => (
            <SwiperSlide key={film.codigoFilme}>
              <Film
                img={film.urlImagem}
                title={film.titulo}
                description={film.descricao}
              />
            </SwiperSlide>
          ))}
          <SwiperSlide />
        </Swiper>
      </Box>
    </Stack>
  );
};

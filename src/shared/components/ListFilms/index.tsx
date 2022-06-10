import React from 'react';

import {ArrowForwardIos} from '@mui/icons-material';
import {Box, Stack, Typography} from '@mui/material';
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
          spaceBetween={180}
          slidesPerView={6}
          navigation
          scrollbar={{draggable: true}}>
          <SwiperSlide>
            <Film img="https://occ-0-1549-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWnGQbHWkKAh48O0fz_y8skAXhiRLXSCkA1AXX4h2uQL4P28PTIgY5bmXpw8_aXOjobq_zVlIyhxkcpLMk4zwtY_k_PC8rShazbXqGXqmBue-c-0GyrUlAheXpPlaTIOfdSEd4A7UhOKDumFqc9UKYEPSnTWMsGh-5TvzpbP_ThyEj2I9eBWKfnWQTg-uJc.jpg?r=b8f" />
          </SwiperSlide>
          <SwiperSlide>
            <Film img="https://occ-0-1549-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT4l0DqNyv-0GJqfNoE1CR8GeeQwiptBcq7bmlntzdJWP0TjCVdFYkLz6xMHMvi1qItOvJYfdigWZ92YuPsEWI9wF9stZGptlFJvn1866nG4xZOB5eHN_6Zi48V44GwlO6p-RZSmda-QtEHwm9YKBvLUZGk-zhnyfXsiiA.jpg?r=10b" />
          </SwiperSlide>
          <SwiperSlide>
            <Film img="https://occ-0-1549-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ4fwEcQ2yWxskYgVF0YWskJm2HIW1F98qw78NMP4cTecxxetb7ID7HoCOJGzSOoZGRRbFhywjDUZeEQdvxbGWSpZyfHAUXexb8ACpvo7h5AAuzjl13GLlXUxLpV5Xa5BI9E.jpg?r=426" />
          </SwiperSlide>
          <SwiperSlide>
            <Film img="https://occ-0-1549-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV2IOyIBWmMu85_fULUP1REJBciH_gEIu4eFbV88TR8Rnmdvg1SFDD2abAaDPnAmLwYsKuklJDgpDbYAxYayztDemFBxLEV9WS7vjqFDrsuaVika6Pe8jc3l3dQqAsDjcCM1ZVrRZgAfyr6HJguIdTvXo1sJJURelNWaaw.jpg?r=22d" />
          </SwiperSlide>
          <SwiperSlide>
            <Film img="https://occ-0-1549-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWnGQbHWkKAh48O0fz_y8skAXhiRLXSCkA1AXX4h2uQL4P28PTIgY5bmXpw8_aXOjobq_zVlIyhxkcpLMk4zwtY_k_PC8rShazbXqGXqmBue-c-0GyrUlAheXpPlaTIOfdSEd4A7UhOKDumFqc9UKYEPSnTWMsGh-5TvzpbP_ThyEj2I9eBWKfnWQTg-uJc.jpg?r=b8f" />
          </SwiperSlide>
          <SwiperSlide>
            <Film img="https://occ-0-1549-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT4l0DqNyv-0GJqfNoE1CR8GeeQwiptBcq7bmlntzdJWP0TjCVdFYkLz6xMHMvi1qItOvJYfdigWZ92YuPsEWI9wF9stZGptlFJvn1866nG4xZOB5eHN_6Zi48V44GwlO6p-RZSmda-QtEHwm9YKBvLUZGk-zhnyfXsiiA.jpg?r=10b" />
          </SwiperSlide>
          <SwiperSlide>
            <Film img="https://occ-0-1549-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ4fwEcQ2yWxskYgVF0YWskJm2HIW1F98qw78NMP4cTecxxetb7ID7HoCOJGzSOoZGRRbFhywjDUZeEQdvxbGWSpZyfHAUXexb8ACpvo7h5AAuzjl13GLlXUxLpV5Xa5BI9E.jpg?r=426" />
          </SwiperSlide>
          <SwiperSlide>
            <Film img="https://occ-0-1549-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV2IOyIBWmMu85_fULUP1REJBciH_gEIu4eFbV88TR8Rnmdvg1SFDD2abAaDPnAmLwYsKuklJDgpDbYAxYayztDemFBxLEV9WS7vjqFDrsuaVika6Pe8jc3l3dQqAsDjcCM1ZVrRZgAfyr6HJguIdTvXo1sJJURelNWaaw.jpg?r=22d" />
          </SwiperSlide>
          <SwiperSlide>
            <Film img="https://occ-0-1549-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWnGQbHWkKAh48O0fz_y8skAXhiRLXSCkA1AXX4h2uQL4P28PTIgY5bmXpw8_aXOjobq_zVlIyhxkcpLMk4zwtY_k_PC8rShazbXqGXqmBue-c-0GyrUlAheXpPlaTIOfdSEd4A7UhOKDumFqc9UKYEPSnTWMsGh-5TvzpbP_ThyEj2I9eBWKfnWQTg-uJc.jpg?r=b8f" />
          </SwiperSlide>
          <SwiperSlide>
            <Film img="https://occ-0-1549-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT4l0DqNyv-0GJqfNoE1CR8GeeQwiptBcq7bmlntzdJWP0TjCVdFYkLz6xMHMvi1qItOvJYfdigWZ92YuPsEWI9wF9stZGptlFJvn1866nG4xZOB5eHN_6Zi48V44GwlO6p-RZSmda-QtEHwm9YKBvLUZGk-zhnyfXsiiA.jpg?r=10b" />
          </SwiperSlide>
          <SwiperSlide>
            <Film img="https://occ-0-1549-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ4fwEcQ2yWxskYgVF0YWskJm2HIW1F98qw78NMP4cTecxxetb7ID7HoCOJGzSOoZGRRbFhywjDUZeEQdvxbGWSpZyfHAUXexb8ACpvo7h5AAuzjl13GLlXUxLpV5Xa5BI9E.jpg?r=426" />
          </SwiperSlide>
          <SwiperSlide>
            <Film img="https://occ-0-1549-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV2IOyIBWmMu85_fULUP1REJBciH_gEIu4eFbV88TR8Rnmdvg1SFDD2abAaDPnAmLwYsKuklJDgpDbYAxYayztDemFBxLEV9WS7vjqFDrsuaVika6Pe8jc3l3dQqAsDjcCM1ZVrRZgAfyr6HJguIdTvXo1sJJURelNWaaw.jpg?r=22d" />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Stack>
  );
};

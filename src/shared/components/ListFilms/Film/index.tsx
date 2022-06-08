import React from 'react';

import {Stack} from '@mui/material';

interface IProps {
  img: string;
}

export const Film: React.FC<IProps> = ({img}) => {
  return (
    <Stack
      sx={{
        height: 128,
        width: 226,
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      bla
    </Stack>
  );
};

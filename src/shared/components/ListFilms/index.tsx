import React from 'react';

import {ArrowForwardIos} from '@mui/icons-material';
import {Stack, Typography} from '@mui/material';

interface IProps {
  title: string;
}

export const ListFilms: React.FC<IProps> = ({title}) => {
  return (
    <Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography fontSize={20} fontWeight={700}>
          {title}
        </Typography>
        <ArrowForwardIos sx={{width: 16}} />
      </Stack>

      <Stack></Stack>
    </Stack>
  );
};

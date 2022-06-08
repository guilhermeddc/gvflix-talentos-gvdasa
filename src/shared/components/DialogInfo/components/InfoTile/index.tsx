import React from 'react';

import {Stack, Typography} from '@mui/material';

interface IProps {
  label: string;
  info: string;
}

export const InfoTile: React.FC<IProps> = ({info, label}) => {
  return (
    <Stack direction="row" spacing={0.5}>
      <Typography
        color="#737273"
        fontSize={14}
        fontWeight={400}
        lineHeight="130%">
        {label}
      </Typography>
      <Typography fontSize={14} fontWeight={300} lineHeight="130%">
        {info}
      </Typography>
    </Stack>
  );
};

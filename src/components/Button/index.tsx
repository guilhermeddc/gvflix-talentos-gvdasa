import React from 'react';

import {Button as MuiButton, ButtonProps, Typography} from '@mui/material';

interface IProps extends ButtonProps {
  label: string;
}

export const Button: React.FC<IProps> = ({label, ...props}) => {
  return (
    <MuiButton {...props} sx={{height: 49}}>
      <Typography fontWeight={800} textTransform="capitalize">
        {label}
      </Typography>
    </MuiButton>
  );
};

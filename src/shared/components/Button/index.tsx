import React from 'react';

import {Button as MuiButton, ButtonProps, Typography} from '@mui/material';

import {CircularProgress} from './styles';

interface IProps extends ButtonProps {
  label?: string;
  loading?: boolean;
  children?: React.ReactNode;
}

export const Button: React.FC<IProps> = ({
  label,
  children,
  loading = false,
  ...props
}) => {
  return (
    <MuiButton
      {...props}
      sx={{height: 44, minWidth: 158}}
      disabled={loading || props.disabled}>
      <Typography fontWeight={800} textTransform="capitalize">
        {loading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          children || label
        )}
      </Typography>
    </MuiButton>
  );
};

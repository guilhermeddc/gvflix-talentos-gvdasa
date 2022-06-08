import React from 'react';

import {Stack} from '@mui/material';

interface IProps {
  paddingRight?: boolean;
  paddingLeft?: boolean;
  children: React.ReactNode;
}

export const Container: React.FC<IProps> = ({
  children,
  paddingLeft = true,
  paddingRight = false,
}) => {
  return (
    <Stack
      paddingLeft={{xs: paddingLeft ? 3 : 0, sm: paddingLeft ? 5 : 0}}
      paddingRight={{xs: paddingRight ? 3 : 0, sm: paddingRight ? 5 : 0}}>
      {children}
    </Stack>
  );
};

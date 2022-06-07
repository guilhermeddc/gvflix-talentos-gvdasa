import React from 'react';
import {useLocation, NavLink} from 'react-router-dom';

import {Typography, useTheme} from '@mui/material';

interface IProps {
  link: string;
  text: string;
}

export const Link: React.FC<IProps> = ({link, text}) => {
  const {pathname} = useLocation();
  const theme = useTheme();

  return (
    <Typography
      variant="body2"
      color="white"
      component={NavLink}
      to={link}
      fontSize={16}
      fontWeight={400}
      sx={{
        textDecoration: 'none',
        borderBottom:
          pathname === link
            ? `1px solid ${theme.palette.primary.main}`
            : 'none',
      }}>
      {text}
    </Typography>
  );
};

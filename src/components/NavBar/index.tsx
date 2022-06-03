import React from 'react';

import {AppBar, Container, Stack, Toolbar} from '@mui/material';
import {logo} from 'assets';

interface IProps {
  loginPage?: boolean;
}

export const NavBar: React.FC<IProps> = ({loginPage = false}) => {
  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Stack height={80} direction="row" p={3.5}>
            <img src={logo} alt="GVFLIX" />
            {!loginPage && <div></div>}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

import React from 'react';

import {ExpandMoreRounded, SearchRounded} from '@mui/icons-material';
import {AppBar, Container, IconButton, Stack, Toolbar} from '@mui/material';
import {logo, user} from 'shared/assets';

import {Link} from './components/Link';

interface IProps {
  loginPage?: boolean;
}

export const NavBar: React.FC<IProps> = ({loginPage = false}) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        background:
          'linear-gradient(180deg, #090909 -1445%, rgba(9, 9, 9, 0) 829.61%)',
      }}
      elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Stack
            height={80}
            direction="row"
            paddingY={3.5}
            paddingX={1.7}
            flex={1}>
            <img src={logo} alt="GVFLIX" />
            {!loginPage && (
              <Stack
                ml={5}
                direction="row"
                justifyContent="space-between"
                flex={1}>
                <Stack direction="row" spacing={2}>
                  <Link text="Home" link="/" />
                  <Link text="Séries" link="/series" />
                  <Link text="Filmes" link="/filmes" />
                  <Link text="Minha Lista" link="/minha-lista" />
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <IconButton size="small">
                    <SearchRounded fontSize="small" />
                  </IconButton>

                  <img src={user} alt="Usuário" width={40} height={40} />

                  <IconButton size="small">
                    <ExpandMoreRounded fontSize="small" />
                  </IconButton>
                </Stack>
              </Stack>
            )}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

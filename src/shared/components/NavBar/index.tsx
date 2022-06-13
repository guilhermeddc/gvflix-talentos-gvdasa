import React from 'react';
import {useNavigate} from 'react-router-dom';

import {ArrowBackRounded} from '@mui/icons-material';
import {AppBar, Stack, Toolbar} from '@mui/material';
import {logo} from 'shared/assets';

import {Button} from '../Button';
import {Container} from '../Container';
import {UserMenu} from './components';
import {Link} from './components/Link';

interface IProps {
  loginPage?: boolean;
  profilePage?: boolean;
  dashboardPage?: boolean;
}

export const NavBar: React.FC<IProps> = ({
  loginPage = false,
  profilePage = false,
  dashboardPage = false,
}) => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="fixed"
      sx={{
        background: !profilePage
          ? 'linear-gradient(180deg, #090909 -1445%, rgba(9, 9, 9, 0) 829.61%)'
          : 'black',
      }}
      elevation={0}>
      <Container paddingRight>
        <Toolbar disableGutters>
          {!profilePage || !dashboardPage ? (
            <Stack
              height={80}
              direction="row"
              paddingY={3.5}
              paddingX={{xs: 1.7, sm: 0}}
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

                  <UserMenu />
                </Stack>
              )}
            </Stack>
          ) : (
            <>
              <Stack
                height={80}
                direction="row"
                paddingY={3.5}
                paddingX={{xs: 1.7, sm: 0}}
                justifyContent="space-between"
                alignItems="center"
                flex={1}>
                {!dashboardPage && (
                  <Button
                    color="inherit"
                    startIcon={<ArrowBackRounded />}
                    label="Voltar para o início"
                    onClick={() => navigate('/')}
                  />
                )}

                <img src={logo} alt="GVFLIX" />
                <UserMenu profilePage={profilePage} />
              </Stack>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

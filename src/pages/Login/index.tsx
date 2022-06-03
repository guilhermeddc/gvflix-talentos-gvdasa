import React, {useCallback} from 'react';
import {Link} from 'react-router-dom';

import {Paper, Stack, Typography} from '@mui/material';
import {Button, Form, NavBar, TextField} from 'components';
import {authService} from 'services/api/auth';

const Login: React.FC = () => {
  const handleSubmit = useCallback(async (data: any) => {
    try {
      const {data: response} = await authService.signIn(data.email, data.senha);

      // eslint-disable-next-line
      console.log('*** response', response);
    } catch (error: any) {
      // eslint-disable-next-line
      console.log('*** error', error.response.data);
    }
  }, []);

  return (
    <>
      <NavBar loginPage />
      <Stack
        component={Form}
        onSubmit={handleSubmit}
        width="100%"
        height="100vh"
        justifyContent="center"
        alignItems="center">
        <Stack component={Paper} p={5}>
          <Typography color="white" variant="h5" fontWeight={500}>
            Entrar
          </Typography>

          <Stack minWidth={272} spacing={2} mt={3} mb={5}>
            <TextField name="email" placeholder="E-mail" type="email" />
            <TextField name="senha" placeholder="Senha" type="password" />
          </Stack>

          <Button label="Entrar" type="submit" variant="contained" />

          <Stack mt={3} spacing={1}>
            <Typography color="#737373" variant="body2" fontSize={16}>
              Novo no GVFLIX?{' '}
              <Typography
                color="white"
                sx={{
                  textDecoration: 'none',
                  cursor: 'pointer',
                  '&:hover': {color: '#737373'},
                }}
                component={Link}
                to="/registrar">
                Se inscreva.
              </Typography>
            </Typography>

            <Typography color="#737373" variant="body2" fontSize={14}>
              Essa página é protegida pelo <br /> Google reCAPTCHA.{' '}
              <a href="www.google.com.br">Learn more.</a>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Login;

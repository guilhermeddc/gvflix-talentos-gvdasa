import React, {useCallback, useState} from 'react';
import {Link} from 'react-router-dom';

import {Container, Paper, Stack, Typography} from '@mui/material';
import {Alert, Button, Form, NavBar, TextField} from 'shared/components';
import {useAuth} from 'shared/hooks';

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const {signIn} = useAuth();

  const handleSubmit = useCallback(
    async (data: any) => {
      setLoading(true);
      try {
        await signIn(data.email, data.senha);
      } catch (error: any) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    },
    [signIn],
  );

  return (
    <>
      <NavBar loginPage />
      <Container>
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

            <Button
              label="Entrar"
              type="submit"
              variant="contained"
              loading={loading}
            />

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
      </Container>

      <Alert
        message="Usuário ou senha inválidos"
        open={isError}
        onClose={() => setIsError(false)}
        severity="error"
      />
    </>
  );
};

export default Login;

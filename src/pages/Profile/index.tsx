import React from 'react';

import {CheckCircleRounded} from '@mui/icons-material';
import {Container, Stack, Typography} from '@mui/material';
import {NavBar} from 'shared/components';

const Profile: React.FC = () => {
  return (
    <Stack
      width="100%"
      height="100vh"
      bgcolor="white"
      justifyContent="center"
      alignItems="center">
      <NavBar profilePage />

      <Container maxWidth="md">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            borderBottom: '1px solid #737373',
            paddingY: 2,
          }}>
          <Typography fontSize={32} fontWeight={500} color="black">
            Conta
          </Typography>

          <Stack alignItems="center" direction="row" spacing={1}>
            <CheckCircleRounded color="success" />
            <Typography fontSize={16} fontWeight={400} color="black">
              Assinante desde Janeiro de 2018
            </Typography>
          </Stack>
        </Stack>

        <Stack
          sx={{
            borderBottom: '1px solid #737373',
            paddingY: 2,
          }}>
          <Stack spacing={1} direction="row" justifyContent="space-between">
            <Typography fontSize={16} fontWeight={600} color="black">
              Igor Pinheiro do Nascimento
            </Typography>

            <Typography fontSize={16} fontWeight={400} color="#0071EB">
              Editar dados
            </Typography>
          </Stack>

          <Typography fontSize={16} fontWeight={400} color="#737373">
            inascimento@gvdasa.com.br
          </Typography>
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            borderBottom: '1px solid #737373',
            paddingY: 2,
          }}>
          <Typography fontSize={32} fontWeight={500} color="black">
            Plano
          </Typography>
        </Stack>

        <Stack
          sx={{
            paddingY: 2,
          }}>
          <Stack spacing={1} direction="row" justifyContent="space-between">
            <Typography fontSize={16} fontWeight={600} color="black">
              Plano premium max
            </Typography>

            <Typography fontSize={16} fontWeight={400} color="#0071EB">
              Alterar plano
            </Typography>
          </Stack>

          <Typography
            fontSize={16}
            fontWeight={400}
            color="#737373"
            width={448}>
            Nossa melhor qualidade de vídeo em Ultra HD (4K) e HDR. Assista em
            celulares, tablets, computadores ou TVs.
          </Typography>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Profile;

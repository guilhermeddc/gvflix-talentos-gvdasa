import React from 'react';

import {InfoRounded, PlayArrowRounded} from '@mui/icons-material';
import {Container, Stack, Typography} from '@mui/material';
import {Button} from 'shared/components';

export const Preview: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Stack height="75vh" justifyContent="flex-end">
        <Stack>
          <Typography fontWeight={500} fontSize={48}>
            Morbius
          </Typography>

          <Typography
            fontWeight={300}
            fontSize={18}
            lineHeight="150%"
            maxWidth={560}>
            Dangerously ill with a rare blood disorder, and determined to save
            others suffering his same fate, Dr. Michael Morbius attempts a
            desperate gamble. What at first appears to be a radical success soon
            reveals itself to be a remedy potentially worse than the disease.
          </Typography>

          <Stack mt={3} direction="row" spacing={3}>
            <Button
              label="Assistir"
              variant="contained"
              startIcon={<PlayArrowRounded />}
            />
            <Button
              label="Mais Info"
              variant="contained"
              color="secondary"
              startIcon={<InfoRounded />}
            />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

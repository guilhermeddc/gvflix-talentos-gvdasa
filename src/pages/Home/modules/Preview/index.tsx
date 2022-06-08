import React, {useState} from 'react';

import {InfoRounded, PlayArrowRounded} from '@mui/icons-material';
import {Stack, Typography} from '@mui/material';
import {Container, Button, DialogInfo} from 'shared/components';

export const Preview: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Stack mb={8}>
      <Container>
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
              desperate gamble. What at first appears to be a radical success
              soon reveals itself to be a remedy potentially worse than the
              disease.
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
                onClick={() => setOpen(true)}
                startIcon={<InfoRounded />}
              />
            </Stack>
          </Stack>
        </Stack>
      </Container>

      <DialogInfo
        openDialog={open}
        onClose={() => setOpen(false)}
        title="Morbius"
        content="Sidelined after an accident, hotshot Los Angeles lawyer Mickey Halley restarts his career — and his trademark Lincoln — when he takes on a murder case."
      />
    </Stack>
  );
};

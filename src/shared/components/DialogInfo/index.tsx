import React from 'react';

import {AddRounded, CloseRounded, PlayArrowRounded} from '@mui/icons-material';
import {
  Dialog,
  DialogContent,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import {morbiusDialog} from 'shared/assets';
import {Button} from 'shared/components';

import {InfoTile} from './components/InfoTile';

interface IProps {
  openDialog: boolean;
  onClose: () => void;
  title: string;
  content: string;
  image?: string;
}

export const DialogInfo: React.FC<IProps> = ({
  openDialog,
  onClose,
  title,
  content,
  image = morbiusDialog
}) => {
  return (
    <Dialog open={openDialog} onClose={onClose}>
      <Stack position="absolute" top={16} right={16}>
        <IconButton
          onClick={onClose}
          sx={{width: 32, height: 32, border: '1px solid white'}}>
          <CloseRounded fontSize="small" />
        </IconButton>
      </Stack>
      <Stack
        component={DialogContent}
        padding={0}
        sx={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
        <Stack height={228} justifyContent="flex-end" p={4.3} width={544}>
          <Stack direction="row" spacing={3}>
            <Button
              label="Assistir"
              variant="contained"
              startIcon={<PlayArrowRounded />}
            />

            <IconButton sx={{width: 44, height: 44, border: '1px solid white'}}>
              <AddRounded />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
      <Stack component={DialogContent} bgcolor="#1B1B1B" p={4.3} spacing={1}>
        <Typography fontWeight={500} fontSize={24}>
          {title}
        </Typography>

        <Typography fontSize={14} fontWeight={300} lineHeight="130%">
          {content}
        </Typography>

        <Stack>
          <Divider sx={{mt: 2, mb: 1}} />
        </Stack>

        <Typography fontSize={16} fontWeight={500} lineHeight="130%">
          Informações
        </Typography>

        <Stack>
          <InfoTile label="Gênero:" info="Ação, Ficção, Comédia" />
          <InfoTile label="Ano de lançamento:" info="2022" />
          <InfoTile label="Lingua original:" info="EN" />
          <InfoTile label="Classificação:" info="Todas as idades" />
        </Stack>
      </Stack>
    </Dialog>
  );
};

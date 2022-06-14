import React from 'react';

import {Dialog, DialogContent, Stack, Typography} from '@mui/material';

import {Button} from '../Button';

interface IProps {
  openDialog: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading?: boolean;
}

export const DialogConfirm: React.FC<IProps> = ({
  openDialog,
  onClose,
  onConfirm,
  loading = false,
}) => {
  return (
    <Dialog open={openDialog} onClose={onClose}>
      <Stack component={DialogContent} bgcolor="#1B1B1B" p={4.3} spacing={3}>
        <Typography variant="h6" color="textPrimary">
          Confirmação
        </Typography>

        <Typography variant="body1" color="textPrimary">
          Deseja realmente excluir o registro?
        </Typography>

        <Stack direction="row" spacing={1}>
          <Button
            label="Cancelar"
            variant="contained"
            color="secondary"
            loading={loading}
            onClick={onClose}
          />
          <Button
            label="Confirmar"
            variant="contained"
            color="primary"
            loading={loading}
            onClick={onConfirm}
          />
        </Stack>
      </Stack>
    </Dialog>
  );
};

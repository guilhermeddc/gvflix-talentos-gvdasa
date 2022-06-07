import React from 'react';

import {CloseRounded} from '@mui/icons-material';
import {Alert as MuiAlert, IconButton, Snackbar} from '@mui/material';

interface IProps {
  message: string;
  severity: 'success' | 'info' | 'warning' | 'error';
  open: boolean;
  onClose: () => void;
  duration?: number;
}

export const Alert: React.FC<IProps> = ({
  message,
  severity,
  open,
  onClose,
  duration = 5000,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={onClose}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
      <MuiAlert
        variant="filled"
        onClose={onClose}
        severity={severity}
        sx={{width: '100%'}}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            onClick={onClose}
            size="small">
            <CloseRounded fontSize="small" />
          </IconButton>
        }>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

import React, {useCallback, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {SearchRounded, ExpandMoreRounded} from '@mui/icons-material';
import {Stack, IconButton, Menu, MenuItem} from '@mui/material';
import {user} from 'shared/assets';
import {useAuth} from 'shared/hooks';

interface IProps {
  profilePage?: boolean;
}

export const UserMenu: React.FC<IProps> = ({profilePage = false}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();
  const {signOut} = useAuth();

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    [],
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleClickNavigate = useCallback(
    (path: string) => {
      handleClose();
      navigate(path);
    },
    [navigate, handleClose],
  );

  const handleClickSignOut = useCallback(() => {
    handleClose();
    signOut();
  }, [signOut, handleClose]);

  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      position="relative"
      width={181}
      justifyContent="flex-end">
      {!profilePage && (
        <IconButton size="small">
          <SearchRounded fontSize="small" />
        </IconButton>
      )}

      <img src={user} alt="Usuário" width={40} height={40} />

      <IconButton
        size="small"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        <ExpandMoreRounded fontSize="small" />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{top: 30}}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        {!profilePage && (
          <MenuItem
            onClick={() => handleClickNavigate('/meu-perfil')}
            sx={{width: 150}}>
            Meu perfil
          </MenuItem>
        )}
        <MenuItem onClick={handleClickSignOut} sx={{width: 150}}>
          Sair
        </MenuItem>
      </Menu>
    </Stack>
  );
};

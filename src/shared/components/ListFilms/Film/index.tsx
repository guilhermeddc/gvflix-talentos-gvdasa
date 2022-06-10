import React, {useState} from 'react';

import {
  AddRounded,
  ExpandMoreRounded,
  PlayArrowRounded,
} from '@mui/icons-material';
import {IconButton, Paper, Stack, Typography} from '@mui/material';
import {DialogInfo} from 'shared/components/DialogInfo';

interface IProps {
  img: string;
}

export const Film: React.FC<IProps> = ({img}) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Stack
        padding={2}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}>
        <Stack
          component={Paper}
          sx={{
            height: 128 - 16,
            width: 226 - 16,
            transition: 'all .3s ease-in-out',
            cursor: 'pointer',
            background: open
              ? `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), linear-gradient(180deg, rgba(0, 0, 0, 0) 49.93%, #000000 96.57%), url(${img})`
              : `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            justifyContent: 'flex-end',
            '&:hover': {
              transform: 'scale(1.15)',
            },
            p: 2,
          }}>
          <Stack
            sx={{
              transform: !open ? 'translateY(150px)' : 'translateY(0)',
              transition: 'transform .4s ease-in-out',
            }}>
            <Stack direction="row" spacing={1}>
              <IconButton
                sx={{
                  width: 32,
                  height: 32,
                  bgcolor: 'white',
                  border: '1px solid white',
                }}>
                <PlayArrowRounded
                  sx={{
                    transition: 'color .2s ease-in-out',
                    color: 'black',
                    ':hover': {color: 'white'},
                  }}
                />
              </IconButton>

              <IconButton
                sx={{width: 32, height: 32, border: '1px solid white'}}>
                <AddRounded />
              </IconButton>

              <IconButton
                onClick={() => setOpenDialog(true)}
                sx={{width: 32, height: 32, border: '1px solid white'}}>
                <ExpandMoreRounded />
              </IconButton>
            </Stack>

            <Typography fontWeight={500} fontSize={20}>
              Morbius
            </Typography>

            <Typography fontWeight={500} fontSize={12} color="#9E9E9E">
              Ação • Comédia • Ficção
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <DialogInfo
        openDialog={openDialog}
        onClose={() => setOpenDialog(false)}
        title="Morbius"
        content="Sidelined after an accident, hotshot Los Angeles lawyer Mickey Halley restarts his career — and his trademark Lincoln — when he takes on a murder case."
      />
    </>
  );
};

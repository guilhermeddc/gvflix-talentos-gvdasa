import React, {useCallback, useEffect, useState} from 'react';

import {AddRounded, DeleteRounded, EditRounded} from '@mui/icons-material';
import {Container, IconButton, Paper, Stack, Typography} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';
import {Button, DialogFilm, NavBar} from 'shared/components';
import {filmsService, IFilm} from 'shared/services/api/films';

const Dashboard: React.FC = () => {
  const [data, setData] = useState<IFilm[]>([]);
  const [openDialog, setOpenDialog] = useState(false);

  const handleGetFilms = useCallback(async () => {
    const response = await filmsService.getFilms();

    setData(response);
  }, []);

  useEffect(() => {
    handleGetFilms();
  }, [handleGetFilms]);

  const handleCloseDialog = useCallback(async () => {
    setOpenDialog(false);

    await handleGetFilms();
  }, [handleGetFilms]);

  return (
    <Stack
      width="100%"
      height="100vh"
      bgcolor="white"
      justifyContent="center"
      alignItems="center">
      <NavBar dashboardPage profilePage />

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
            Bem-vindo, administrador.
          </Typography>
        </Stack>

        <Stack mt={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center">
            <Typography fontSize={32} fontWeight={500} color="black">
              Filmes
            </Typography>

            <Button
              label="Adicionar filme"
              endIcon={<AddRounded />}
              onClick={() => setOpenDialog(true)}
              variant="contained"
              color="secondary"
            />
          </Stack>

          <Paper sx={{height: 400, width: '100%', mt: 3}}>
            <DataGrid
              columns={[
                {
                  field: '',
                  headerName: 'Ações',
                  minWidth: 150,
                  align: 'center',
                  headerAlign: 'center',
                  renderCell: () => (
                    <>
                      <IconButton>
                        <EditRounded />
                      </IconButton>

                      <IconButton>
                        <DeleteRounded />
                      </IconButton>
                    </>
                  ),
                },
                {
                  field: 'titulo',
                  headerName: 'Título',
                  flex: 1,
                },
                {
                  field: 'descricao',
                  headerName: 'Descrição',
                  flex: 2,
                },
              ]}
              rows={
                data.map((item) => {
                  return {
                    ...item,
                    id: item.codigoFilme,
                  };
                }) || []
              }
            />
          </Paper>
        </Stack>
      </Container>

      <DialogFilm openDialog={openDialog} onClose={handleCloseDialog} />
    </Stack>
  );
};

export default Dashboard;

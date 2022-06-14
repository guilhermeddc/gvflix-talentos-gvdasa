import React, {useCallback, useEffect, useState} from 'react';

import {AddRounded, DeleteRounded, EditRounded} from '@mui/icons-material';
import {Container, IconButton, Paper, Stack, Typography} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';
import {Button, DialogConfirm, DialogFilm, NavBar} from 'shared/components';
import {filmsService, IFilm} from 'shared/services/api/films';

const Dashboard: React.FC = () => {
  const [data, setData] = useState<IFilm[]>([]);
  const [dataItem, setDataItem] = useState<IFilm | undefined>();
  const [dataId, setDataId] = useState<number | undefined>();
  const [openDialog, setOpenDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleOpenEditDialog = useCallback((film: IFilm) => {
    setDataItem(film);

    setOpenDialog(true);
  }, []);

  const handleOpenDeleteDialog = useCallback((id: number) => {
    setOpenDeleteDialog(true);

    setDataId(id);
  }, []);

  const handleDeleteFilm = useCallback(async () => {
    setLoading(true);
    setOpenDeleteDialog(false);

    dataId && (await filmsService.deleteFilm(dataId));

    await handleGetFilms();
    setLoading(false);
  }, [dataId, handleGetFilms]);

  const handleCloseDeleteDialog = useCallback(async () => {
    setOpenDeleteDialog(false);

    setDataId(undefined);
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
                  renderCell: (params) => (
                    <>
                      <IconButton
                        onClick={() => handleOpenEditDialog(params.row)}>
                        <EditRounded />
                      </IconButton>

                      <IconButton
                        onClick={() =>
                          handleOpenDeleteDialog(params.row.codigoFilme)
                        }>
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

      <DialogFilm
        openDialog={openDialog}
        onClose={handleCloseDialog}
        initialData={dataItem}
      />

      <DialogConfirm
        openDialog={openDeleteDialog}
        onClose={handleCloseDeleteDialog}
        onConfirm={handleDeleteFilm}
        loading={loading}
      />
    </Stack>
  );
};

export default Dashboard;

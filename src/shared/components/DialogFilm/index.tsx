import React, {useCallback, useEffect, useRef, useState} from 'react';

import {CloseRounded} from '@mui/icons-material';
import {Dialog, DialogContent, IconButton, Stack} from '@mui/material';
import {Alert, Button, TextField, Form} from 'shared/components';
import {filmsService, IFilm} from 'shared/services/api/films';

interface IProps {
  openDialog: boolean;
  onClose: () => void;
  initialData?: IFilm;
}

export const DialogFilm: React.FC<IProps> = ({
  openDialog,
  onClose,
  initialData,
}) => {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [image, setImage] = useState('');

  const formRef = useRef<HTMLFormElement>(null);

  const handleClose = useCallback(() => {
    onClose();

    formRef.current?.reset();
  }, [onClose]);

  const handleSubmit = useCallback(
    async (data: any) => {
      setLoading(true);
      try {
        initialData
          ? await filmsService.updateFilm({
              codigoFilme: initialData.codigoFilme,
              descricao: data.descricao,
              titulo: data.titulo,
              urlImagem: data.urlImagem,
            })
          : await filmsService.createFilm(data);

        formRef.current?.reset();

        handleClose();
      } catch (error: any) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    },
    [handleClose, initialData],
  );

  useEffect(() => {
    initialData && setImage(initialData.urlImagem);
  }, [initialData]);

  return (
    <>
      <Dialog open={openDialog} onClose={handleClose}>
        <Stack position="absolute" top={16} right={16}>
          <IconButton
            onClick={handleClose}
            sx={{width: 32, height: 32, border: '1px solid white'}}>
            <CloseRounded fontSize="small" />
          </IconButton>
        </Stack>

        <Stack
          component={DialogContent}
          padding={0}
          sx={{
            backgroundImage: `url(${
              image
                ? image
                : 'https://linda-hoang.com/wp-content/uploads/2014/10/img-placeholder-dark.jpg'
            })`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}>
          <Stack
            component={Form}
            onSubmit={handleSubmit}
            justifyContent="flex-end"
            p={4.3}
            height={228}
            width={544}
          />
        </Stack>

        <Stack component={DialogContent} bgcolor="#1B1B1B" p={4.3} spacing={1}>
          <Stack
            component={Form}
            onSubmit={handleSubmit}
            initialData={initialData}
            ref={formRef}
            spacing={3}>
            <TextField name="titulo" placeholder="Titulo" />
            <TextField name="descricao" placeholder="Descrição" />
            <TextField
              name="urlImagem"
              placeholder="Imagem"
              onChange={({target}) => setImage(target.value)}
            />

            <Stack spacing={3} direction="row">
              <Button
                label="Cancelar"
                variant="contained"
                loading={loading}
                color="secondary"
                onClick={onClose}
                fullWidth
              />

              <Button
                label="Salvar"
                type="submit"
                variant="contained"
                loading={loading}
                fullWidth
              />
            </Stack>
          </Stack>
        </Stack>
      </Dialog>

      <Alert
        message="Erro ao salvar filme"
        open={isError}
        onClose={() => setIsError(false)}
        severity="error"
      />
    </>
  );
};

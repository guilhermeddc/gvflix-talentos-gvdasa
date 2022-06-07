import {CircularProgress as MuiCircularProgress, styled} from '@mui/material';

export const CircularProgress = styled(MuiCircularProgress)(({theme}) => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -theme.spacing(1.5),
    marginLeft: -theme.spacing(1.5),
  },
}));

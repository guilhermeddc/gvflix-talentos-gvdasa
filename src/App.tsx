import React from 'react';

import {CssBaseline, ThemeProvider} from '@mui/material';
import {Routes} from 'routes';
import {AppProvider} from 'shared/context';
import {theme} from 'shared/styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Routes />
        <CssBaseline />
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;

import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { SnackbarProvider } from 'notistack';
import AppRouter from './routers';
import { CheckAdminProvider } from './checkAdminContext';

const theme = createTheme();

const App = () => (
  <SnackbarProvider>
    <CheckAdminProvider>
      <ThemeProvider theme={theme}>
        <SCThemeProvider theme={theme}>
          <AppRouter />
        </SCThemeProvider>
      </ThemeProvider>
    </CheckAdminProvider>
  </SnackbarProvider>
);

export default App;

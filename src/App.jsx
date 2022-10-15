import React from 'react';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { RoutesApp } from './routes';
import { GlobalStyle } from './styles/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RoutesApp />
    </ThemeProvider>
  );
}

export default App;

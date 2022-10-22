import React from "react";
import { ThemeProvider } from 'styled-components';
import theme from './Constants/Theme';
import { GlobalStyle } from './Router/GlobalStyle';
import { CroctProvider } from '@croct/plug-react'


const App = () => {
  const noAccountId = '00000000-0000-0000-0000-000000000000'

  return (
    <CroctProvider appId={noAccountId}>
      <ThemeProvider theme={theme}>
          <GlobalStyle />
      </ThemeProvider>
    </CroctProvider>
  );
};

export default App;

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '@/theme';
import { IComponentProps } from '@/typings/common';

const ThemeProvidersWrapper: React.FC<IComponentProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  </ThemeProvider>
);

export default ThemeProvidersWrapper;

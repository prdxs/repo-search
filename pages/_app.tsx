import React from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';

import { useApollo } from '../apollo/client';
import theme from '../theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <Component {...pageProps} />
        </MuiThemeProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;

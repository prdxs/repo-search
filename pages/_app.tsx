import React from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';

import ThemeProvidersWrapper from '@/components/ThemeProvidersWrapper';
import { useApollo } from '@/apollo/client';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvidersWrapper>
        <Component {...pageProps} />
      </ThemeProvidersWrapper>
    </ApolloProvider>
  );
};

export default App;

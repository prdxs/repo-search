import React from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';

import ThemeProvidersWrapper from '@/components/ThemeProvidersWrapper';
import { useApollo } from '@/apollo/client';
import store from '@/state/store';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <ThemeProvidersWrapper>
          <Component {...pageProps} />
        </ThemeProvidersWrapper>
      </Provider>
    </ApolloProvider>
  );
};

export default App;

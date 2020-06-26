import { useMemo } from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createIsomorphLink() {
  // In case we had our own custom ApolloServer running in the same node process than Next.js
  // if (typeof window === 'undefined') {
  //   const { SchemaLink } = require('apollo-link-schema');
  //   const { schema } = require('./schema');
  //
  //   return new SchemaLink({ schema });
  // }

  const { HttpLink } = require('apollo-link-http');

  return new HttpLink({
    uri: 'https://api.github.com/graphql',
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GH_TOKEN}`,
    },
  });
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphLink(),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState!);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}

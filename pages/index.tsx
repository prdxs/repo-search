import React from 'react';
import gql from 'graphql-tag';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';

import { initializeApollo } from '@/apollo/client';
import { Query } from '@/typings/api';

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      name
    }
  }
`;

const Index: React.FC = () => {
  const { data } = useQuery<Pick<Query, 'viewer'>>(ViewerQuery);
  const viewer = data?.viewer || { name: 'Unknown' };

  return (
    <div>
      You&apos;re signed in as {viewer.name}, goto{' '}
      <Link href="/about">
        <a>static</a>
      </Link>{' '}
      page.
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ViewerQuery,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default Index;

import React, { useCallback, useState } from 'react';
import clsx from 'clsx';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import gql from 'graphql-tag';
import { GetStaticProps } from 'next';
import { useQuery } from '@apollo/react-hooks';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';

import { initializeApollo } from '@/apollo/client';
import { IComponentProps } from '@/typings/common';
import { Query, User } from '@/typings/api';
import SearchBar from '@/components/SearchBar';
import UserCard from '@/components/UserCard';

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      avatarUrl
      name
      location
      bio
      repositories(first: 100) {
        totalCount
      }
      url
    }
  }
`;

const UsersQuery = gql`
  query($query: String!) {
    search(query: $query, first: 100, type: USER) {
      nodes {
        __typename
        ... on User {
          id
          avatarUrl
          name
          location
          bio
          repositories(first: 100) {
            totalCount
          }
          url
        }
      }
    }
  }
`;

const IndexPage: React.FC<IComponentProps> = ({ className }) => {
  const [value, setValue] = useState('');

  const { data: viewerData } = useQuery<Partial<Query>>(ViewerQuery);

  const viewer = viewerData?.viewer;
  const { avatarUrl, name, location, bio, repositories, url } = viewer || {};
  const repoCount = repositories?.totalCount || 0;

  const { data: usersData, loading } = useQuery<Partial<Query>>(UsersQuery, {
    skip: !value.length,
    variables: {
      query: value,
    },
  });
  const { search } = usersData || {};
  const { nodes } = search || {};
  const userNodes = nodes || [];
  const users = userNodes.filter(
    (node) => !!node && node.__typename === 'User'
  );
  const foundUsers = users.length > 0;

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const newValue = event.target.value;
      setValue(newValue);
    },
    []
  );

  const handleClear = useCallback(() => {
    setValue('');
  }, []);

  return (
    <div className={clsx('IndexPage-root', className)}>
      <Grid container justify="center">
        <Grid item>
          <SearchBar
            value={value}
            onChange={handleChange}
            onClear={handleClear}
          />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item className="IndexPage-list">
          <Grid container direction="column" spacing={4}>
            {loading && (
              <Grid item>
                <Grid container justify="center">
                  <Grid item>
                    <CircularProgress />
                  </Grid>
                </Grid>
              </Grid>
            )}
            {foundUsers && (
              <Grid item>
                <Alert severity="warning">
                  This cards are retrieved and rendered in the client using
                  Github&apos;s GraphQL API.
                </Alert>
              </Grid>
            )}
            {foundUsers
              ? users.map((user) => {
                  const {
                    id,
                    avatarUrl,
                    name,
                    location,
                    bio,
                    repositories,
                    url,
                  } = (user as User) || {};
                  const repoCount = repositories?.totalCount || 0;

                  return (
                    <Grid item key={id}>
                      <UserCard
                        avatar={avatarUrl}
                        name={name || undefined}
                        location={location || undefined}
                        bio={bio || undefined}
                        link={url}
                        repoCount={repoCount}
                      />
                    </Grid>
                  );
                })
              : viewer && (
                  <>
                    <Grid item>
                      <Alert severity="info">
                        This card is static site generated using the viewer data
                        provided by the Github GraphQL API. As we are using my
                        personal token, my user data is displayed.
                      </Alert>
                    </Grid>
                    <Grid item>
                      <UserCard
                        avatar={avatarUrl}
                        name={name || undefined}
                        location={location || undefined}
                        bio={bio || undefined}
                        link={url}
                        repoCount={repoCount}
                      />
                    </Grid>
                  </>
                )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const StyledIndexPage = styled(IndexPage)`
  &.IndexPage-root {
    padding-top: calc(${({ theme }) => theme.spacing(24)} + 52px);
    height: 100vh;

    > .MuiGrid-container:nth-child(1) {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      width: 100%;
      padding-top: ${({ theme }) => theme.spacing(8)};
      padding-bottom: ${({ theme }) => theme.spacing(16)};

      ${({ theme }) => {
        const color = theme.palette.background.default;
        const fromColor = transparentize(1.0, color);
        const toColor = transparentize(0.0, color);

        return css`
          background-image: linear-gradient(to top, ${fromColor}, ${toColor});
        `;
      }}
    }

    .IndexPage-list {
      max-width: 500px;
      padding: ${({ theme }) => theme.spacing(0, 2, 8)};
    }
  }
`;

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

export default StyledIndexPage;

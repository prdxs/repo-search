import React from 'react';
import clsx from 'clsx';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import { IRepositorySearchPageProps } from './RepositorySearchPage.typings';
import SearchBar from '@/components/SearchBar';
import RepositoryCard from '@/components/RepositoryCard';

const RepositorySearchPage: React.FC<IRepositorySearchPageProps> = ({
  className,
  style,
  loading,
  repositories,
  query,
  onChange,
  onClear,
}) => (
  <div className={clsx('RepositorySearchPage-root', className)} style={style}>
    <Grid container justify="center">
      <Grid item>
        <SearchBar value={query} onChange={onChange} onClear={onClear} />
      </Grid>
    </Grid>
    <Grid container justify="center">
      <Grid item className="RepositorySearchPage-list">
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
          {repositories.length > 0
            ? repositories.map((repo) => (
                <Grid item key={repo.id}>
                  <RepositoryCard
                    name={repo.name}
                    link={repo.link}
                    stars={repo.stars}
                    forks={repo.forks}
                    issues={repo.issues}
                    lastUpdated={repo.lastUpdated}
                  />
                </Grid>
              ))
            : null}
        </Grid>
      </Grid>
    </Grid>
  </div>
);

const StyledRepositorySearchPage = styled(RepositorySearchPage)`
  &.RepositorySearchPage-root {
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

    .RepositorySearchPage-list {
      max-width: 500px;
      padding: ${({ theme }) => theme.spacing(0, 2, 8)};
    }
  }
`;

export default StyledRepositorySearchPage;

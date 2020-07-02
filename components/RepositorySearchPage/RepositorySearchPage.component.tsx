import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import VisibilityIcon from '@material-ui/icons/Visibility';

import { IRepositorySearchPageProps } from './RepositorySearchPage.typings';
import SearchBar from '@/components/SearchBar';
import RepositoryCard from '@/components/RepositoryCard';
import getRepoFromUrl from '@/utils/getRepoFromUrl';

const RepositorySearchPage: React.FC<IRepositorySearchPageProps> = ({
  className,
  style,
  loading,
  repositories,
  query,
  onChange,
  onClear,
  withLinks,
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
            ? repositories.map((repo) => {
                const viewButton = (
                  <Fab
                    className="RepositorySearchPage-viewButton"
                    color="primary"
                    aria-label="view"
                    size="small"
                  >
                    <VisibilityIcon />
                  </Fab>
                );
                const { owner, repo: repoName } = getRepoFromUrl(repo.link);

                return (
                  <Grid item key={repo.id}>
                    <div className="RepositorySearchPage-cardContainer">
                      <RepositoryCard
                        name={repo.name}
                        link={repo.link}
                        stars={repo.stars}
                        forks={repo.forks}
                        issues={repo.issues}
                        lastUpdated={repo.lastUpdated}
                      />
                      {withLinks ? (
                        <Link
                          href="/repositories/[id]/[owner]/[repo]"
                          as={`/repositories/${repo.id}/${owner}/${repoName}`}
                        >
                          {viewButton}
                        </Link>
                      ) : (
                        viewButton
                      )}
                    </div>
                  </Grid>
                );
              })
            : null}
        </Grid>
      </Grid>
    </Grid>
  </div>
);

RepositorySearchPage.defaultProps = {
  withLinks: false,
};

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

      .RepositorySearchPage-cardContainer {
        position: relative;

        .RepositorySearchPage-viewButton {
          position: absolute;
          right: -48px;
          bottom: 0;
          opacity: 0;
          transition: opacity 0.4s;
        }

        &:hover .RepositorySearchPage-viewButton {
          opacity: 1;
        }
      }
    }
  }
`;

export default StyledRepositorySearchPage;

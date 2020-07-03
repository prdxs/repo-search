import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CircularProgress from '@material-ui/core/CircularProgress';

import RepositoryCard from '@/components/RepositoryCard';
import IssueCard from '@/components/IssueCard';
import { IRepositoryPageProps } from './RepositoryPage.typings';

const RepositoryPage: React.FC<IRepositoryPageProps> = ({
  className,
  style,
  name,
  link,
  stars,
  forks,
  issues,
  lastUpdated,
  issueList,
  loadingIssues,
}) => (
  <div className={clsx('RepositoryPage-root', className)} style={style}>
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <RepositoryCard
          name={name}
          link={link}
          stars={stars}
          forks={forks}
          issues={issues}
          lastUpdated={lastUpdated}
        />
      </Grid>
    </Grid>
    <Grid container justify="center">
      <Grid item className="RepositoryPage-list">
        <Grid container direction="column" spacing={4}>
          {loadingIssues && (
            <Grid item>
              <Grid container justify="center">
                <Grid item>
                  <CircularProgress />
                </Grid>
              </Grid>
            </Grid>
          )}
          {issueList.map(({ id, title, link, state }) => (
            <Grid item key={id}>
              <IssueCard title={title} link={link} state={state} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
    <Tooltip title="Back" aria-label="back">
      <Link href="/repositories">
        <Fab color="secondary" className="RepositoryPage-backButton">
          <ArrowBackIcon />
        </Fab>
      </Link>
    </Tooltip>
  </div>
);

const StyledRepositoryPage = styled(RepositoryPage)`
  &.RepositoryPage-root {
    padding-top: calc(${({ theme }) => theme.spacing(24)} + 140px);
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

    .RepositoryPage-list {
      max-width: 500px;
      padding: ${({ theme }) => theme.spacing(0, 2, 8)};
    }

    .RepositoryPage-backButton {
      position: fixed;
      bottom: ${({ theme }) => theme.spacing(8)};
      right: ${({ theme }) => theme.spacing(4)};
    }
  }
`;

export default StyledRepositoryPage;

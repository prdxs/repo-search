import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import { IRepositoryListProps } from './RepositoryList.typings';
import RepositoryCard from '@/components/RepositoryCard';

const RepositoryList: React.FC<IRepositoryListProps> = ({
  className,
  style,
  repositories,
}) => (
  <Grid
    className={clsx('RepositoryList', className)}
    style={style}
    container
    spacing={4}
  >
    {repositories.map((repo) => (
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
    ))}
  </Grid>
);

const StyledRepositoryList = styled(RepositoryList)`
  &.RepositoryList {
    max-width: 500px;
    padding: ${({ theme }) => theme.spacing(0, 2, 8)};
  }
`;

export default StyledRepositoryList;

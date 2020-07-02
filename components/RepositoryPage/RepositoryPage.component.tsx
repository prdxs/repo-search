import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import RepostoryCard from '@/components/RepositoryCard';
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
}) => (
  <div className={clsx('RepositoryPage-root', className)} style={style}>
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <RepostoryCard
          name={name}
          link={link}
          stars={stars}
          forks={forks}
          issues={issues}
          lastUpdated={lastUpdated}
        />
      </Grid>
    </Grid>
  </div>
);

const StyledRepositoryPage = styled(RepositoryPage)`
  &.RepositoryPage-root {
    height: 100vh;

    > .MuiGrid-container:first-child {
      padding-top: ${({ theme }) => theme.spacing(8)};
      padding-bottom: ${({ theme }) => theme.spacing(16)};
    }
  }
`;

export default StyledRepositoryPage;

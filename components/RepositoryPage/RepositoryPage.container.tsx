import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import { getRepository } from '@/components/RepositorySearchPage/state/actions';
import { selectRepositoryEntities } from '@/components/RepositorySearchPage/state/selectors';
import RepositoryPage from './RepositoryPage.component';
import { getRepoIssues } from './state/actions';
import { selectAll, selectIssuesLoading } from './state/selectors';

const RepositoryPageContainer: React.FC<{
  id: string;
  owner: string;
  repo: string;
}> = ({ id, owner, repo }) => {
  const dispatch = useDispatch();
  const repositoryDictionary = useSelector(selectRepositoryEntities);
  const issueList = useSelector(selectAll);
  const loadingIssues = useSelector(selectIssuesLoading);

  const selectedRepo = repositoryDictionary[id];

  useEffect(() => {
    dispatch(getRepository({ owner, repo }));
    dispatch(getRepoIssues({ owner, repo }));
  }, [owner, repo]);

  if (selectedRepo === undefined) {
    return (
      <Grid
        style={{ height: '100vh' }}
        container
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <CircularProgress />
        </Grid>
      </Grid>
    );
  }

  return (
    <RepositoryPage
      issueList={issueList}
      loadingIssues={loadingIssues}
      {...selectedRepo}
    />
  );
};

export default RepositoryPageContainer;

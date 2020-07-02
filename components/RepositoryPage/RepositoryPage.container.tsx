import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RepositoryPage from './RepositoryPage.component';
import { getRepository } from '@/components/RepositorySearchPage/state/actions';
import {
  selectRepositoriesLoading,
  selectRepositoryEntities,
} from '@/components/RepositorySearchPage/state/selectors';

const RepositoryPageContainer: React.FC<{
  id: string;
  owner: string;
  repo: string;
}> = ({ id, owner, repo }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectRepositoriesLoading);
  const repositoryDictionary = useSelector(selectRepositoryEntities);

  const selectedRepo = repositoryDictionary[id];

  useEffect(() => {
    dispatch(
      getRepository({
        owner,
        repo,
      })
    );
  }, [owner, repo]);

  if (loading || selectedRepo === undefined) {
    return null;
  }

  return <RepositoryPage {...selectedRepo} />;
};

export default RepositoryPageContainer;

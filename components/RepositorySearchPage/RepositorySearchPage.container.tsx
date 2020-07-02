import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'debounce';

import { IComponentProps } from '@/typings/common';
import RepositorySearchPage from './RepositorySearchPage.component';
import { searchRepositories } from './state/actions';
import {
  selectRepositories,
  selectRepositoriesLoading,
} from './state/selectors';

const RepositorySearchPageContainer: React.FC<
  IComponentProps & { withLinks: boolean }
> = ({ withLinks, ...otherProps }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectRepositoriesLoading);
  const repositories = useSelector(selectRepositories);

  const [query, setQuery] = useState('');

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setQuery(event.target.value);
    },
    []
  );

  const handleClear = useCallback(() => {
    setQuery('');
  }, []);

  useEffect(() => {
    const debouncedSearch = debounce(() => {
      dispatch(searchRepositories(query));
    }, 500);

    debouncedSearch();

    return () => {
      debouncedSearch.clear();
    };
  }, [query]);

  return (
    <RepositorySearchPage
      query={query}
      loading={loading}
      repositories={repositories}
      onChange={handleChange}
      onClear={handleClear}
      withLinks={withLinks}
      {...otherProps}
    />
  );
};

export default RepositorySearchPageContainer;

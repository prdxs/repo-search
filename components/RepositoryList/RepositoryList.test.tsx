import React from 'react';

import { render } from '@/test/utils';
import RepositoryList from './RepositoryList.component';
import { repositories } from './api/fixtures';

describe('RepositoryList', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <RepositoryList repositories={repositories} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render as many repositories as provided', () => {
    const { getAllByTestId } = render(
      <RepositoryList repositories={repositories} />
    );

    const repositoryEls = getAllByTestId('RepositoryCard-root');

    expect(repositoryEls).toHaveLength(2);
  });
});

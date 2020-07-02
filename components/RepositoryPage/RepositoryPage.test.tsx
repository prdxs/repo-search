import React from 'react';
import { render } from '@/test/utils';

import RepositoryPage from './RepositoryPage.component';

describe('RepositoryPage', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <RepositoryPage
        name="prdxs/repo-search"
        link="https://github.com/prdxs/repo-search"
        stars={12}
        forks={10}
        issues={100}
        lastUpdated="1st Jul 2020 07:20:59"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

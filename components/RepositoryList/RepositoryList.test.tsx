import React from 'react';

import { render } from '@/test/utils';
import RepositoryList from './RepositoryList.component';

describe('RepositoryList', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<RepositoryList />);

    expect(asFragment()).toMatchSnapshot();
  });
});

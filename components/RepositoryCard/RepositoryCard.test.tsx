import React from 'react';

import { render } from '@/test/utils';
import RepositoryCard from './RepositoryCard.component';

describe('RepositoryCard', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<RepositoryCard />);

    expect(asFragment()).toMatchSnapshot();
  });
});

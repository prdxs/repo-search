import React from 'react';

import { render } from '@/test/utils';
import RepositoryCard from './RepositoryCard.component';

describe('RepositoryCard', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<RepositoryCard name="prdxs/repo-search" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the provided name', () => {
    const name = 'prdxs/repo-search';
    const { queryByText } = render(<RepositoryCard name={name} />);

    const nameEl = queryByText(name);

    expect(nameEl).toBeInTheDocument();
  });
});

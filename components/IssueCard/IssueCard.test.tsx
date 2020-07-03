import React from 'react';

import { render } from '@/test/utils';
import IssueCard from './IssueCard.component';

describe('IssueCard', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<IssueCard />);

    expect(asFragment()).toMatchSnapshot();
  });
});

import React from 'react';

import { render } from '@/test/utils';
import IssueCard from './IssueCard.component';

describe('IssueCard', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<IssueCard title="bug" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render title', () => {
    const title = '2020 is trying to kill us';
    const { queryByText } = render(<IssueCard title={title} />);

    const titleEl = queryByText(title);

    expect(titleEl).toBeInTheDocument();
  });
});

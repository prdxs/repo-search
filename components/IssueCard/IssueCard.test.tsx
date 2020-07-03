import React from 'react';
import { mount } from 'enzyme';
import Link from '@material-ui/core/Link';

import { render } from '@/test/utils';
import ThemeProvidersWrapper from '@/components/ThemeProvidersWrapper';
import IssueCard from './IssueCard.component';

describe('IssueCard', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <IssueCard
        title="bug"
        link="https://github.com/facebook/react/issues/19245"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render title', () => {
    const title = '2020 is trying to kill us';
    const { queryByText } = render(
      <IssueCard
        title={title}
        link="https://github.com/facebook/react/issues/19245"
      />
    );

    const titleEl = queryByText(title);

    expect(titleEl).toBeInTheDocument();
  });

  it('should render link using the href provided in the link prop', () => {
    const link = 'https://github.com/facebook/react/issues/19245';
    const wrapper = mount(
      <ThemeProvidersWrapper>
        <IssueCard title="bug" link={link} />
      </ThemeProvidersWrapper>
    );

    expect(wrapper.find(Link).prop('href')).toEqual(link);
  });
});

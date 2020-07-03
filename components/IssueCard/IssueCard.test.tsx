import React from 'react';
import { mount } from 'enzyme';
import Link from '@material-ui/core/Link';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

import { render } from '@/test/utils';
import ThemeProvidersWrapper from '@/components/ThemeProvidersWrapper';
import IssueCard from './IssueCard.component';
import { EIssueState } from './IssueCard.typings';

describe('IssueCard', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <IssueCard
        title="bug"
        link="https://github.com/facebook/react/issues/19245"
        state={EIssueState.Open}
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
        state={EIssueState.Open}
      />
    );

    const titleEl = queryByText(title);

    expect(titleEl).toBeInTheDocument();
  });

  it('should render link using the href provided in the link prop', () => {
    const link = 'https://github.com/facebook/react/issues/19245';
    const wrapper = mount(
      <ThemeProvidersWrapper>
        <IssueCard title="bug" link={link} state={EIssueState.Open} />
      </ThemeProvidersWrapper>
    );

    expect(wrapper.find(Link).prop('href')).toEqual(link);
  });

  it('should render the proper icon given the status prop', () => {
    const wrapper = mount(
      <IssueCard
        title="bug"
        link="https://github.com/facebook/react/issues/19245"
        state={EIssueState.Open}
      />
    );

    expect(wrapper.find(AssignmentLateIcon)).toHaveLength(1);
    expect(wrapper.find(AssignmentTurnedInIcon)).toHaveLength(0);

    wrapper.setProps({ state: EIssueState.Closed });

    expect(wrapper.find(AssignmentLateIcon)).toHaveLength(0);
    expect(wrapper.find(AssignmentTurnedInIcon)).toHaveLength(1);
  });
});

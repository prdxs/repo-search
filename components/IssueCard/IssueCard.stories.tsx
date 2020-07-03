import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import StorybookWrapper from '@/components/StorybookWrapper';
import IssueCard from './IssueCard.component';
import { EIssueState } from './IssueCard.typings';

export default {
  title: 'IssueCard',
  component: IssueCard,
  decorators: [withKnobs],
};

export const Default: React.FC = () => {
  return (
    <StorybookWrapper>
      <IssueCard
        title={text('name', 'bug')}
        link={text('link', 'https://github.com/facebook/react/issues/19245')}
        state={select(
          'state',
          [EIssueState.Open, EIssueState.Closed],
          EIssueState.Open
        )}
      />
    </StorybookWrapper>
  );
};

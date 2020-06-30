import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import StorybookWrapper from '@/components/StorybookWrapper';
import RepositoryCard from './RepositoryCard.component';

export default {
  title: 'RepositoryCard',
  component: RepositoryCard,
  decorators: [withKnobs],
};

export const Default: React.FC = () => {
  return (
    <StorybookWrapper>
      <RepositoryCard name={text('name', 'facebook/react')} />
    </StorybookWrapper>
  );
};

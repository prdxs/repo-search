import React from 'react';
import { select, text, withKnobs } from '@storybook/addon-knobs';

import StorybookWrapper from '@/components/StorybookWrapper';
import UserCard from './UserCard.component';

export default {
  title: 'UserCard',
  component: UserCard,
  decorators: [withKnobs],
};

export const Default: React.FC = () => {
  const avatar = select(
    'avatar',
    {
      None: undefined,
      Ruben:
        'https://avatars0.githubusercontent.com/u/16763209?s=460&u=3e17b9f9b36b8b486b31cbf67181070cd9593212&v=4',
    },
    undefined
  );

  return (
    <StorybookWrapper>
      <UserCard
        style={{ width: 500, height: 200 }}
        avatar={avatar}
        name={text('name', '')}
        bio={text('bio', "I'm super coool!")}
        location={text('location', 'Manchester')}
      />
    </StorybookWrapper>
  );
};

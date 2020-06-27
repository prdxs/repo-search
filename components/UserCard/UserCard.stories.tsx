import React from 'react';

import StorybookWrapper from '@/components/StorybookWrapper';
import UserCard from './UserCard.component';

export default {
  title: 'UserCard',
  component: UserCard,
};

export const Default: React.FC = () => {
  return (
    <StorybookWrapper>
      <UserCard style={{ width: 500, height: 200 }} />
    </StorybookWrapper>
  );
};

export const WithImage: React.FC = () => {
  const avatarUrl =
    'https://avatars0.githubusercontent.com/u/16763209?s=460&u=3e17b9f9b36b8b486b31cbf67181070cd9593212&v=4';
  return (
    <StorybookWrapper>
      <UserCard style={{ width: 500, height: 200 }} avatar={avatarUrl} />
    </StorybookWrapper>
  );
};

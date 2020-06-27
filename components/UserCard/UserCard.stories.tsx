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

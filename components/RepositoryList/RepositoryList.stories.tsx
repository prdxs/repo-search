import React from 'react';

import StorybookWrapper from '@/components/StorybookWrapper';
import RepositoryList from './RepositoryList.component';
import { repositories } from './api/fixtures';

export default {
  title: 'RepositoryList',
  component: RepositoryList,
};

export const Default: React.FC = () => {
  return (
    <StorybookWrapper>
      <RepositoryList repositories={repositories} />
    </StorybookWrapper>
  );
};

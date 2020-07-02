import React from 'react';

import StorybookWrapper from '@/components/StorybookWrapper';
import RepositorySearchPage from './RepositorySearchPage.component';
import { repositories } from './api/fixtures';

export default {
  title: 'RepositorySearchPage',
  component: RepositorySearchPage,
};

export const Default: React.FC = () => {
  return (
    <StorybookWrapper>
      <RepositorySearchPage repositories={repositories} />
    </StorybookWrapper>
  );
};

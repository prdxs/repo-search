import React from 'react';

import StorybookWrapper from '@/components/StorybookWrapper';
import SearchBar from './SearchBar.component';

export default {
  title: 'SearchBar',
  component: SearchBar,
};

export const Text: React.FC = () => (
  <StorybookWrapper>
    <SearchBar />
  </StorybookWrapper>
);

import React, { useState, useCallback } from 'react';
import { action } from '@storybook/addon-actions';

import StorybookWrapper from '@/components/StorybookWrapper';
import SearchBar from './SearchBar.component';

export default {
  title: 'SearchBar',
  component: SearchBar,
};

export const Controlled: React.FC = () => {
  const [value, setValue] = useState('');

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const newValue = event.target.value;

      action('changed')(event);
      setValue(newValue);
    },
    []
  );

  const handleClear = useCallback(() => {
    action('cleared')();
    setValue('');
  }, []);

  return (
    <StorybookWrapper>
      <SearchBar value={value} onChange={handleChange} onClear={handleClear} />
    </StorybookWrapper>
  );
};

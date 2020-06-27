import React from 'react';
import { render } from '@/test/utils';
import UserCard from '@/components/UserCard';

describe('UserCard', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<UserCard />);

    expect(asFragment()).toMatchSnapshot();
  });
});

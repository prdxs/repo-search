import React from 'react';
import { mount } from 'enzyme';

import { render } from '@/test/utils';
import UserCard from '@/components/UserCard';
import ThemeProvidersWrapper from '@/components/ThemeProvidersWrapper';

describe('UserCard', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<UserCard />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the not available letters if the avatar is not provided', () => {
    const { queryByText } = render(<UserCard />);
    const avatar = queryByText('N/A');

    expect(avatar).toBeInTheDocument();
  });

  it('should render the avatar if provided', () => {
    const avatarUrl =
      'https://avatars0.githubusercontent.com/u/16763209?s=460&u=3e17b9f9b36b8b486b31cbf67181070cd9593212&v=4';
    const wrapper = mount(
      <ThemeProvidersWrapper>
        <UserCard avatar={avatarUrl} />{' '}
      </ThemeProvidersWrapper>
    );

    expect(wrapper.find('img').prop('src')).toEqual(avatarUrl);
  });

  it('should render the name of the user if provided', () => {
    const name = 'Donald Trump';
    const { queryByText } = render(<UserCard name={name} />);

    const nameEl = queryByText(name);

    expect(nameEl).toBeInTheDocument();
  });

  it("should render 'Unknown' if the name of the user is not provided", () => {
    const { queryByText } = render(<UserCard />);

    const nameEl = queryByText('Unknown');

    expect(nameEl).toBeInTheDocument();
  });

  it('should render the bio if provided', () => {
    const { queryByText } = render(<UserCard bio="Cool bio" />);

    const nameEl = queryByText(/Cool bio/);

    expect(nameEl).toBeInTheDocument();
  });

  it('should render the location if provided', () => {
    const { queryByText } = render(<UserCard location="Manchester" />);

    const nameEl = queryByText(/Manchester/);

    expect(nameEl).toBeInTheDocument();
  });

  it('should render repoCount if provided', () => {
    const { queryByText } = render(<UserCard repoCount={10} />);

    const nameEl = queryByText(/10/);

    expect(nameEl).toBeInTheDocument();
  });
});

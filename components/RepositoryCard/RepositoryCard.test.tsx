import React from 'react';
import { mount } from 'enzyme';

import { render } from '@/test/utils';
import ThemeProvidersWrapper from '@/components/ThemeProvidersWrapper';
import RepositoryCard from './RepositoryCard.component';

describe('RepositoryCard', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <RepositoryCard
        name="prdxs/repo-search"
        link="https://github.com/prdxs/repo-search"
        stars={12}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the provided name', () => {
    const name = 'prdxs/repo-search';
    const { queryByText } = render(
      <RepositoryCard
        name={name}
        link="https://github.com/prdxs/repo-search"
        stars={12}
      />
    );

    const nameEl = queryByText(name);

    expect(nameEl).toBeInTheDocument();
  });

  it('should render the provided link', () => {
    const link = 'https://github.com/prdxs/repo-search';
    const wrapper = mount(
      <ThemeProvidersWrapper>
        <RepositoryCard name="prdxs/repo-search" link={link} stars={12} />
      </ThemeProvidersWrapper>
    );

    expect(wrapper.find('a').prop('href')).toEqual(link);
  });

  it('should render the provided number of stars', () => {
    const stars = 10;
    const { getByText } = render(
      <RepositoryCard
        name="prdxs/repo-search"
        link="https://github.com/prdxs/repo-search"
        stars={stars}
      />
    );

    const nameEl = getByText(`${stars}`);

    expect(nameEl).toHaveTextContent(`${stars}`);
  });
});

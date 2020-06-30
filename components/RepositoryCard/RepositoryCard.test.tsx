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
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the provided name', () => {
    const name = 'prdxs/repo-search';
    const { queryByText } = render(
      <RepositoryCard name={name} link="https://github.com/prdxs/repo-search" />
    );

    const nameEl = queryByText(name);

    expect(nameEl).toBeInTheDocument();
  });

  it('should render the provided link', () => {
    const link = 'https://github.com/prdxs/repo-search';
    const wrapper = mount(
      <ThemeProvidersWrapper>
        <RepositoryCard name="prdxs/repo-search" link={link} />
      </ThemeProvidersWrapper>
    );

    expect(wrapper.find('a').prop('href')).toEqual(link);
  });
});

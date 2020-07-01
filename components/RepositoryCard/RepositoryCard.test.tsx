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
        forks={10}
        issues={100}
        lastUpdated="1st Jul 2020 07:20:59"
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
        forks={10}
        issues={100}
        lastUpdated="1st Jul 2020 07:20:59"
      />
    );

    const nameEl = queryByText(name);

    expect(nameEl).toBeInTheDocument();
  });

  it('should render the provided link', () => {
    const link = 'https://github.com/prdxs/repo-search';
    const wrapper = mount(
      <ThemeProvidersWrapper>
        <RepositoryCard
          name="prdxs/repo-search"
          link={link}
          stars={12}
          forks={10}
          issues={100}
          lastUpdated="1st Jul 2020 07:20:59"
        />
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
        forks={12}
        issues={100}
        lastUpdated="1st Jul 2020 07:20:59"
      />
    );

    const nameEl = getByText(`${stars}`);

    expect(nameEl).toBeInTheDocument();
  });

  it('should render the provided number of forks', () => {
    const forks = 10;
    const { getByText } = render(
      <RepositoryCard
        name="prdxs/repo-search"
        link="https://github.com/prdxs/repo-search"
        stars={12}
        forks={forks}
        issues={100}
        lastUpdated="1st Jul 2020 07:20:59"
      />
    );

    const nameEl = getByText(`${forks}`);

    expect(nameEl).toBeInTheDocument();
  });

  it('should render the provided number of issues', () => {
    const issues = 100;
    const { getByText } = render(
      <RepositoryCard
        name="prdxs/repo-search"
        link="https://github.com/prdxs/repo-search"
        stars={12}
        forks={10}
        issues={issues}
        lastUpdated="1st Jul 2020 07:20:59"
      />
    );

    const nameEl = getByText(`${issues}`);

    expect(nameEl).toBeInTheDocument();
  });

  it('should render the provided lastUpdated date', () => {
    const lastUpdated = '1st Jul 2020 07:20:59';
    const { getByText } = render(
      <RepositoryCard
        name="prdxs/repo-search"
        link="https://github.com/prdxs/repo-search"
        stars={12}
        forks={10}
        issues={100}
        lastUpdated={lastUpdated}
      />
    );

    const nameEl = getByText(`${lastUpdated}`);

    expect(nameEl).toBeInTheDocument();
  });
});

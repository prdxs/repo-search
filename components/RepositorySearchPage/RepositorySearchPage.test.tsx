import React from 'react';
import { render, fireEvent } from '@/test/utils';

import RepositorySearchPage from './RepositorySearchPage.component';
import { repositories } from './api/fixtures';

describe('RepositorySearchPage', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <RepositorySearchPage
        loading={true}
        repositories={repositories}
        query=""
        onChange={jest.fn()}
        onClear={jest.fn()}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render as many repositories as provided', () => {
    const { getAllByTestId } = render(
      <RepositorySearchPage
        loading={false}
        repositories={repositories}
        query=""
        onChange={jest.fn()}
        onClear={jest.fn()}
      />
    );

    const repositoryEls = getAllByTestId('RepositoryCard-root');

    expect(repositoryEls).toHaveLength(2);
  });

  it('should render a SearchBar with the value provided in the query prop', () => {
    const query = 'prdxs';
    const { getByDisplayValue } = render(
      <RepositorySearchPage
        loading={false}
        repositories={repositories}
        query={query}
        onChange={jest.fn()}
        onClear={jest.fn()}
      />
    );

    const inputEl = getByDisplayValue(query);

    expect(inputEl).toBeInTheDocument();
  });

  it('should call change handler when the value changes', () => {
    const query = 'prdxs';
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <RepositorySearchPage
        loading={false}
        repositories={repositories}
        query=""
        onChange={handleChange}
        onClear={jest.fn()}
      />
    );
    const input = getByTestId('SearchBar-actualInput');

    fireEvent.change(input, { target: { value: query } });

    expect(handleChange).toHaveBeenCalled();
  });

  it('should call clear handler when the clear button is clicked', () => {
    const handleClear = jest.fn();
    const { getByTestId } = render(
      <RepositorySearchPage
        loading={false}
        repositories={repositories}
        query="prdxs"
        onChange={jest.fn()}
        onClear={handleClear}
      />
    );
    const clearButtonEl = getByTestId('SearchBar-clearButton');

    fireEvent.click(clearButtonEl);

    expect(handleClear).toHaveBeenCalled();
  });
});

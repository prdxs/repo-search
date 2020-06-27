import React from 'react';
import { render, fireEvent } from '@/test/utils';
import SearchBar from '@/components/SearchBar';

describe('SearchBar', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<SearchBar value="" onChange={jest.fn()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should contain provided value', () => {
    const value = 'cat';
    const { getByDisplayValue } = render(
      <SearchBar value={value} onChange={jest.fn()} />
    );
    const input = getByDisplayValue(value);

    expect(input).toBeInTheDocument();
  });

  it("should render the search button when the input doesn't have a value", () => {
    const { queryByTestId } = render(
      <SearchBar value="" onChange={jest.fn()} />
    );
    const searchButton = queryByTestId('SearchBar-searchButton');
    const clearButton = queryByTestId('SearchBar-clearButton');

    expect(searchButton).toBeInTheDocument();
    expect(clearButton).not.toBeInTheDocument();
  });

  it('should render the clear button when the input has a value', () => {
    const value = 'dog';
    const { queryByTestId } = render(
      <SearchBar value={value} onChange={jest.fn()} />
    );
    const searchButton = queryByTestId('SearchBar-searchButton');
    const clearButton = queryByTestId('SearchBar-clearButton');

    expect(searchButton).not.toBeInTheDocument();
    expect(clearButton).toBeInTheDocument();
  });

  it('should call change handler when the value changes', () => {
    const value = 'rat';
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <SearchBar value="" onChange={handleChange} />
    );
    const input = getByTestId('SearchBar-actualInput');

    fireEvent.change(input, { target: { value } });

    expect(handleChange).toHaveBeenCalled();
  });

  it('should call clear handler when the clear button is clicked', () => {
    const handleClear = jest.fn();
    const { getByTestId } = render(
      <SearchBar value="hamster" onChange={jest.fn()} onClear={handleClear} />
    );
    const clearButtonEl = getByTestId('SearchBar-clearButton');

    fireEvent.click(clearButtonEl);

    expect(handleClear).toHaveBeenCalled();
  });
});

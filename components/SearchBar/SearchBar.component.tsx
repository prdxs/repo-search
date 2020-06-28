import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

import { ISearchBarProps } from './SearchBar.typings';

const SearchBar: React.FC<ISearchBarProps> = ({
  className,
  style,
  value,
  onChange,
  onClear,
}) => {
  const hasValue = value !== undefined && value.length !== 0;

  return (
    <Paper className={clsx('SearchBar-root', className)} style={style}>
      <InputBase
        className="SearchBar-input"
        placeholder="Search Github users"
        inputProps={{
          'aria-label': 'search github users',
          'data-testid': 'SearchBar-actualInput',
        }}
        value={value}
        onChange={onChange}
        data-testid="SearchBar-input"
      />
      {hasValue ? (
        <IconButton
          className=".SearchBar-iconButton"
          aria-label="clear"
          data-testid="SearchBar-clearButton"
          onClick={onClear}
        >
          <ClearIcon />
        </IconButton>
      ) : (
        <IconButton
          className=".SearchBar-iconButton"
          aria-label="search"
          data-testid="SearchBar-searchButton"
        >
          <SearchIcon />
        </IconButton>
      )}
    </Paper>
  );
};

const StyledSearchBar = styled(SearchBar)`
  &.SearchBar-root {
    padding: 2px 4px;
    display: flex;
    align-items: center;

    .SearchBar-input {
      margin-left: ${({ theme }) => theme.spacing(4)};
      flex: 1;
    }

    .SearchBar-divider {
      height: 28px;
      margin: 4px;
    }

    .SearchBar-iconButton {
      padding: 10px;
    }
  }
`;

export default StyledSearchBar;

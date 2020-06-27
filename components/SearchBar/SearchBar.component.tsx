import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import { ISearchBarProps } from './SearchBar.typings';

const SearchBar: React.FC<ISearchBarProps> = ({ className, style }) => {
  return (
    <Paper
      component="form"
      className={clsx('SearchBar-root', className)}
      style={style}
    >
      <InputBase
        className="SearchBar-input"
        placeholder="Search users or repos"
        inputProps={{ 'aria-label': 'search users or repos' }}
      />
      <IconButton
        type="submit"
        className=".SearchBar-iconButton"
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

const StyledSearchBar = styled(SearchBar)`
  &.SearchBar-root {
    padding: 2px 4px;
    display: flex;
    align-items: center;
    width: 400px;

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

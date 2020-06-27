import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';

import { IUserCardProps } from './UserCard.typings';

const UserCard: React.FC<IUserCardProps> = ({ className, style }) => {
  return <Card className={clsx('UserCard', className)} style={style} />;
};

const StyledSearchBar = styled(UserCard)``;

export default StyledSearchBar;

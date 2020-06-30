import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import { IRepositoryCardProps } from './RepositoryCard.typings';

const RepositoryCard: React.FC<IRepositoryCardProps> = ({
  className,
  style,
  name,
}) => (
  <Card className={clsx('UserCard-root', className)} style={style}>
    <CardHeader title={name} />
  </Card>
);

const StyledRepositoryCard = styled(RepositoryCard)``;

export default StyledRepositoryCard;

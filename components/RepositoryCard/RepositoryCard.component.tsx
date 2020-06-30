import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { IRepositoryCardProps } from './RepositoryCard.typings';

const RepositoryCard: React.FC<IRepositoryCardProps> = ({
  className,
  style,
  name,
  link,
}) => (
  <Card className={clsx('UserCard-root', className)} style={style}>
    <CardHeader
      title={
        <Typography variant="h6">
          <Link href={link} target="_blank" color="secondary">
            {name}
          </Link>
        </Typography>
      }
    />
  </Card>
);

const StyledRepositoryCard = styled(RepositoryCard)``;

export default StyledRepositoryCard;

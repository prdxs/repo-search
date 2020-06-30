import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/Star';

import { IRepositoryCardProps } from './RepositoryCard.typings';
import { Badge } from '@material-ui/core';

const RepositoryCard: React.FC<IRepositoryCardProps> = ({
  className,
  style,
  name,
  link,
  stars,
}) => (
  <Card className={clsx('RepositoryCard-root', className)} style={style}>
    <CardHeader
      title={
        <Typography variant="h6">
          <Link href={link} target="_blank" color="secondary">
            {name}
          </Link>
        </Typography>
      }
    />
    <CardContent>
      <Grid container>
        <Grid item xs={6}>
          <Badge
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            color="primary"
            badgeContent={stars}
            max={Infinity}
          >
            <StarIcon className="RepositoryCard-star" fontSize="large" />
          </Badge>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

const StyledRepositoryCard = styled(RepositoryCard)`
  &.RepositoryCard-root {
    .RepositoryCard-star {
      color: #ffd700;
    }
  }
`;

export default StyledRepositoryCard;

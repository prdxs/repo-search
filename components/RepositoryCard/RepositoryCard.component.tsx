import React from 'react';
import clsx from 'clsx';
import styled, { css } from 'styled-components';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/Star';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import BookIcon from '@material-ui/icons/Book';
import BugReportIcon from '@material-ui/icons/BugReport';

import { IRepositoryCardProps } from './RepositoryCard.typings';
import { Badge } from '@material-ui/core';

const RepositoryCard: React.FC<IRepositoryCardProps> = ({
  className,
  style,
  name,
  link,
  stars,
  forks,
  issues,
  lastUpdated,
}) => (
  <Card
    className={clsx('RepositoryCard-root', className)}
    style={style}
    data-testid="RepositoryCard-root"
  >
    <CardHeader
      title={
        <Grid container spacing={1}>
          <Grid item>
            <BookIcon />
          </Grid>
          <Grid item>
            <Typography variant="h6">
              <Link href={link} target="_blank" color="secondary">
                {name}
              </Link>
            </Typography>
          </Grid>
        </Grid>
      }
    />
    <CardContent>
      <Grid container>
        <Grid item xs={4}>
          <Grid container justify="center" alignItems="center">
            <Grid item>
              <Badge
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                color="primary"
                badgeContent={stars}
                max={Infinity}
                showZero
              >
                <StarIcon className="RepositoryCard-star" fontSize="large" />
              </Badge>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container justify="center" alignItems="center">
            <Grid item>
              <Badge
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                color="secondary"
                badgeContent={issues}
                max={Infinity}
                showZero
              >
                <BugReportIcon fontSize="large" />
              </Badge>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container justify="center" alignItems="center">
            <Grid item>
              <Badge
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                color="secondary"
                badgeContent={forks}
                max={Infinity}
                showZero
              >
                <CallSplitIcon fontSize="large" />
              </Badge>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Typography className="RepositoryCard-lastUpdated" variant="caption">
        {lastUpdated}
      </Typography>
    </CardContent>
  </Card>
);

const StyledRepositoryCard = styled(RepositoryCard)`
  &.RepositoryCard-root {
    position: relative;
    min-width: 300px;

    .MuiCardContent-root {
      padding-top: 0;
      padding-bottom: 40px;
    }

    .RepositoryCard-star {
      color: #ffd700;
    }

    .RepositoryCard-lastUpdated {
      position: absolute;

      ${({ theme }) => {
        const space = theme.spacing(1);
        const color = theme.palette.grey.A200;

        return css`
          bottom: ${space};
          right: ${space};
          color: ${color};
        `;
      }}
    }
  }
`;

export default StyledRepositoryCard;

import React from 'react';
import clsx from 'clsx';
import styled, { css } from 'styled-components';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LocationCityIcon from '@material-ui/icons/LocationCity';

import { IUserCardProps } from './UserCard.typings';

const UserCard: React.FC<IUserCardProps> = ({
  className,
  style,
  avatar,
  name,
  bio,
  location,
  repoCount,
}) => {
  return (
    <Card className={clsx('UserCard-root', className)} style={style}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="avatar"
            className="UserCard-avatar"
            data-testid="UserCard-avatar"
            src={avatar}
          >
            N/A
          </Avatar>
        }
        title={name || 'Unknown'}
        subheader={
          location && (
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <LocationCityIcon fontSize="small" />
              </Grid>
              <Grid item>
                <Typography variant="body2">{location}</Typography>
              </Grid>
            </Grid>
          )
        }
      />
      <CardContent>
        {!!repoCount && (
          <Typography
            className="UserCard-repoCount"
            variant="body1"
            component="p"
          >
            <b>Repo Count</b> •{` ${repoCount}`}
          </Typography>
        )}
        {bio && (
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Bio</b> •{` ${bio}`}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

const StyledSearchBar = styled(UserCard)`
  &.UserCard-root {
    .UserCard-avatar {
      ${({ theme }) => {
        const size = theme.spacing(14);

        return css`
          height: ${size};
          width: ${size};
        `;
      }}
    }

    .MuiCardHeader-title {
      font-size: 1.25rem;
    }

    .UserCard-repoCount {
      margin-bottom: ${({ theme }) => theme.spacing(1)};
    }
  }
`;

export default StyledSearchBar;

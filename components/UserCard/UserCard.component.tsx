import React from 'react';
import clsx from 'clsx';
import styled, { css } from 'styled-components';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

import { IUserCardProps } from './UserCard.typings';

const UserCard: React.FC<IUserCardProps> = ({ className, style, avatar }) => {
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
      />
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
  }
`;

export default StyledSearchBar;

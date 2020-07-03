import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { IIssueCardProps } from './IssueCard.typings';

const IssueCard: React.FC<IIssueCardProps> = ({
  className,
  style,
  title,
  link,
}) => (
  <Card
    className={clsx('IssueCard-root', className)}
    style={style}
    data-testid="IssueCard-root"
  >
    <CardHeader
      title={
        <Typography variant="h6">
          <Link href={link} target="_blank" color="secondary">
            {title}
          </Link>
        </Typography>
      }
    />
  </Card>
);

const StyledIssueCard = styled(IssueCard)`
  &.IssueCard-root {
    position: relative;
    min-width: 300px;
  }
`;

export default StyledIssueCard;

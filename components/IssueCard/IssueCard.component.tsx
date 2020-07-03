import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

import { IIssueCardProps, EIssueState } from './IssueCard.typings';

const IssueCard: React.FC<IIssueCardProps> = ({
  className,
  style,
  title,
  link,
  state,
}) => (
  <Card
    className={clsx('IssueCard-root', className)}
    style={style}
    data-testid="IssueCard-root"
  >
    <CardHeader
      avatar={
        state === EIssueState.Open ? (
          <Tooltip title="Issue Open">
            <AssignmentLateIcon color="error" />
          </Tooltip>
        ) : (
          <Tooltip title="Issue Closed">
            <AssignmentTurnedInIcon color="action" />
          </Tooltip>
        )
      }
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

import { IComponentProps } from '@/typings/common';

export enum EIssueState {
  Open = 'open',
  Closed = 'closed',
}

export interface IIssueCardProps extends IComponentProps {
  title: string;
  link: string;
  state: EIssueState;
}

import { IComponentProps } from '@/typings/common';

export interface IIssueCardProps extends IComponentProps {
  title: string;
  link: string;
  state: 'open' | 'closed';
}

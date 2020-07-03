import { IComponentProps } from '@/typings/common';
import { IIssue } from './state/typings';

export interface IRepositoryPageProps extends IComponentProps {
  name: string;
  link: string;
  stars: number;
  forks: number;
  issues: number;
  lastUpdated: string;
  issueList: Array<IIssue>;
  loadingIssues: boolean;
}

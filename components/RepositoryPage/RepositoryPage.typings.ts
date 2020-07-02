import { IComponentProps } from '@/typings/common';

export interface IRepositoryPageProps extends IComponentProps {
  name: string;
  link: string;
  stars: number;
  forks: number;
  issues: number;
  lastUpdated: string;
}

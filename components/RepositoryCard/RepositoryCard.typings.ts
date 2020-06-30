import { IComponentProps } from '@/typings/common';

export interface IRepositoryCardProps extends IComponentProps {
  name: string;
  link: string;
  stars: number;
}

import { IComponentProps } from '@/typings/common';
import { IRepository } from './api/typings';

export interface IRepositoryListProps extends IComponentProps {
  repositories: Array<IRepository>;
}

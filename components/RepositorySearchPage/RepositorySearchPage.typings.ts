import { IComponentProps } from '@/typings/common';
import { IRepository } from './state/typings';

export interface IRepositorySearchPageProps extends IComponentProps {
  repositories: Array<IRepository>;
  loading: boolean;
  query: string;
  onChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void;
  onClear(): void;
}

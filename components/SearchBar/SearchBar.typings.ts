import { IComponentProps } from '@/typings/common';

export interface ISearchBarProps extends IComponentProps {
  value: string;
  onChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void;
}

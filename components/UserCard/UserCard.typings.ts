import { IComponentProps } from '@/typings/common';

export interface IUserCardProps extends IComponentProps {
  avatar?: string;
  name?: string;
  bio?: string;
  location?: string;
}

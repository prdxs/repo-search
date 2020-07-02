import {
  createSelector,
  Selector,
  EntityState,
  Dictionary,
} from '@reduxjs/toolkit';

import { TRootState } from '@/state/rootReducer';
import { IRepository } from './typings';

const selectRepositoriesState: Selector<
  TRootState,
  EntityState<IRepository> & { loading: boolean }
> = (state) => {
  return state.repositories;
};

export const selectRepositoriesLoading = createSelector<
  TRootState,
  EntityState<IRepository> & { loading: boolean },
  boolean
>(selectRepositoriesState, (repositoriesState) => repositoriesState.loading);

export const selectRepositoryEntities = createSelector<
  TRootState,
  EntityState<IRepository> & { loading: boolean },
  Dictionary<IRepository>
>(selectRepositoriesState, (repositoriesState) => {
  return repositoriesState.entities;
});

export const selectRepositories = createSelector<
  TRootState,
  EntityState<IRepository> & { loading: boolean },
  Array<IRepository>
>(selectRepositoriesState, (repositoriesState) => {
  return repositoriesState.ids
    .map((id) => repositoriesState.entities[id])
    .filter((entity) => {
      if (entity !== undefined) {
        return true;
      }

      return false;
    }) as Array<IRepository>;
});

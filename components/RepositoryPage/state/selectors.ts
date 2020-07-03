import { createSelector, Selector, EntityState } from '@reduxjs/toolkit';

import { TRootState } from '@/state/rootReducer';
import { IIssue } from './typings';
import { issuesAdapter } from './slice';

const selectIssuesState: Selector<
  TRootState,
  EntityState<IIssue> & { loading: boolean }
> = (state) => {
  return state.issues;
};

export const selectIssuesLoading = createSelector<
  TRootState,
  EntityState<IIssue> & { loading: boolean },
  boolean
>(selectIssuesState, (issuesState) => issuesState.loading);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
  selectById,
} = issuesAdapter.getSelectors(selectIssuesState);

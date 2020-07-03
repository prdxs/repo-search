import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { IIssue } from './typings';
import { getRepoIssues } from './actions';

export const issuesAdapter = createEntityAdapter<IIssue>();

export default createSlice({
  name: 'issues',
  initialState: issuesAdapter.getInitialState({
    loading: false,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRepoIssues.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRepoIssues.fulfilled, (state, { payload: issues }) => {
      state.loading = false;
      issuesAdapter.setAll(state, issues);
    });
    builder.addCase(getRepoIssues.rejected, (state) => {
      state.loading = false;
      issuesAdapter.removeAll(state);
    });
  },
});

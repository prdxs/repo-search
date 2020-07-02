import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { IRepository } from '@/components/RepositorySearchPage/state/typings';
import { searchRepositories, getRepository } from './actions';

export const repositoriesAdapter = createEntityAdapter<IRepository>();

export default createSlice({
  name: 'repositories',
  initialState: repositoriesAdapter.getInitialState({
    loading: false,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchRepositories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      searchRepositories.fulfilled,
      (state, { payload: repositories }) => {
        state.loading = false;
        repositoriesAdapter.setAll(state, repositories);
      }
    );
    builder.addCase(searchRepositories.rejected, (state) => {
      state.loading = false;
      repositoriesAdapter.removeAll(state);
    });

    builder.addCase(getRepository.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getRepository.fulfilled,
      (state, { payload: repository }) => {
        state.loading = false;
        repositoriesAdapter.upsertOne(state, repository);
      }
    );
    builder.addCase(getRepository.rejected, (state) => {
      state.loading = false;
    });
  },
});

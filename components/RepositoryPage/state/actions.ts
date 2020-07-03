import { createAsyncThunk } from '@reduxjs/toolkit';

import fetchRepoIssues from '@/components/RepositoryPage/api/fetchRepoIssues';

export const getRepoIssues = createAsyncThunk(
  'issues/getAll',
  async ({ owner, repo }: { owner: string; repo: string }) => {
    const repository = await fetchRepoIssues(owner, repo);
    return repository;
  }
);

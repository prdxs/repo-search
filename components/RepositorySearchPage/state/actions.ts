import { createAsyncThunk } from '@reduxjs/toolkit';

import getRepositories from '@/components/RepositorySearchPage/api/getRepositories';
import getRepositoryApi from '@/components/RepositorySearchPage/api/getRepository';

export const searchRepositories = createAsyncThunk(
  'repositories/search',
  async (q: string) => {
    const repositories = await getRepositories(q);
    return repositories;
  }
);

export const getRepository = createAsyncThunk(
  'repositories/upsertOne',
  async ({ owner, repo }: { owner: string; repo: string }) => {
    const repository = await getRepositoryApi(owner, repo);
    return repository;
  }
);

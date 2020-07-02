import { createAsyncThunk } from '@reduxjs/toolkit';

import getRepositories from '@/components/RepositorySearchPage/api/getRepositories';

export const searchRepositories = createAsyncThunk(
  'repositories/search',
  async (q: string) => {
    const roles = await getRepositories(q);
    return roles;
  }
);

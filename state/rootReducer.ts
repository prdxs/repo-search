import { combineReducers } from '@reduxjs/toolkit';

import repositoriesReducer from '@/components/RepositorySearchPage/state/reducer';
import issuesReducer from '@/components/RepositoryPage/state/reducer';

const rootReducer = combineReducers({
  repositories: repositoriesReducer,
  issues: issuesReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;

export default rootReducer;

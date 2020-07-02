import { combineReducers } from '@reduxjs/toolkit';

import repositoriesReducer from '@/components/RepositorySearchPage/state/reducer';

const rootReducer = combineReducers({
  repositories: repositoriesReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;

export default rootReducer;

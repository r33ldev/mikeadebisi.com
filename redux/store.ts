import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appSlice from './app-state/ui-slice';
import { loadState } from './localstorage';

const rootReducer = combineReducers({
  app: appSlice,
});

const persistedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  preloadedState: persistedState,
  // devTools: process.env.NODE_ENV !== 'production',
});

export default store;
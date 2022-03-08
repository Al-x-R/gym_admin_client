import { combineReducers, configureStore } from '@reduxjs/toolkit';
import adminReducer from './reducers/AdminSlice';

const rootReducer = combineReducers({
  adminReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
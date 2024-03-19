import { configureStore } from '@reduxjs/toolkit';

export const appStore = () => {
  return configureStore({
    reducer: {},
  });
};

export type AppStore = ReturnType<typeof appStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

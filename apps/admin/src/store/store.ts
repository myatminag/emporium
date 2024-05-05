import { configureStore } from '@reduxjs/toolkit';

import { dialogSlice } from './features/general/dialog-state.slice';
import { categorySlice } from './features/category/category-state.slice';

export const appStore = () => {
  return configureStore({
    devTools: true,
    reducer: {
      dialog: dialogSlice.reducer,
      category: categorySlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof appStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

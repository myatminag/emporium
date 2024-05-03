import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { useAppSelector } from '../../hook';
import { RootState } from '../../store';

export interface CategoryStateProps {
  associateBrands: number[];
}

const initialState: CategoryStateProps = {
  associateBrands: [],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setAssociateBrand: (state, action: PayloadAction<number>) => {
      state.associateBrands = [...state.associateBrands, action.payload];
    },
  },
});

export const { setAssociateBrand } = categorySlice.actions;

export const useCategoryState = () =>
  useAppSelector((state: RootState) => state.category);

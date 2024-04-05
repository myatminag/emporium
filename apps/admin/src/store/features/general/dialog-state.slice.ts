import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useAppSelector } from '../../hook';
import { RootState } from '../../store';

export enum DialogEvent {
  initial,
  associateDialog,
  subCategoryDialog,
  createBrandDialog,
}
export interface DialogStateProps {
  dialog: DialogEvent;
}

const initialState: DialogStateProps = {
  dialog: DialogEvent.initial,
};

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    setDialogEvent: (state, action: PayloadAction<DialogEvent>) => {
      state.dialog = action.payload;
    },
  },
});

export const { setDialogEvent } = dialogSlice.actions;
export const useDialogState = () =>
  useAppSelector((state: RootState) => state.dialog);

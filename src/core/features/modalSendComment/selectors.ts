import { RootState } from '../../store';
import { createSelector } from '@reduxjs/toolkit';

const modaSendCommentSelect = (state: RootState) => state.features;

export const selectModal = createSelector(
  modaSendCommentSelect,
  (state) => state
);

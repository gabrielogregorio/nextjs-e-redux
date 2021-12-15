import { RootState } from '../../store';
import { createSelector } from '@reduxjs/toolkit';

const contrastSelect = (state: RootState) => state.features;

export const selectContrast = createSelector(contrastSelect, (state) => state);

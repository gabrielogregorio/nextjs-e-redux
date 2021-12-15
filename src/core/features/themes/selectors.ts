import { RootState } from '../../store';
import { createSelector } from '@reduxjs/toolkit';

const themeSelect = (state: RootState) => state.features;

export const selectTheme = createSelector(themeSelect, (state) => state);

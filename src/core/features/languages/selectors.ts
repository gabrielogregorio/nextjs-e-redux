import { RootState } from '../../store';
import { createSelector } from '@reduxjs/toolkit';

const languageSelect = (state: RootState) => state.features;

export const selectLanguage = createSelector(languageSelect, (state) => state);

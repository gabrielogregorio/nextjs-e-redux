import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';

const selectPosts = (state: RootState) => state.entities;

export const selectEntities = createSelector(selectPosts, (state) => state);

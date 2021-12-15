import { createSlice } from '@reduxjs/toolkit';
import { initialStateTheme } from '../../types/core/themes';

export const sliceTheme = createSlice({
  name: 'sliceTheme',
  initialState: initialStateTheme,
  reducers: {
    setTheme: (state, { payload }) => {
      state.theme = payload;
    }
  }
});

export const { setTheme } = sliceTheme.actions;

export default sliceTheme;

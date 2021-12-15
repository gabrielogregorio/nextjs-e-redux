import { createSlice } from '@reduxjs/toolkit';
import { initialStateLanguage } from '../../types/core/lang';

export const sliceLanguage = createSlice({
  name: 'sliceLanguage',
  initialState: initialStateLanguage,
  reducers: {
    setLanguage: (state, { payload }) => {
      state.lang = payload;
    }
  }
});

export const { setLanguage } = sliceLanguage.actions;

export default sliceLanguage;

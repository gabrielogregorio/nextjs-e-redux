import { createSlice } from '@reduxjs/toolkit';
import { initialStateContrast } from '../../types/core/contrast';

export const sliceContrast = createSlice({
  name: 'sliceContrast',
  initialState: initialStateContrast,
  reducers: {
    toggleContrast: (state) => {
      state.contrast = !state.contrast;
    }
  }
});

export const { toggleContrast } = sliceContrast.actions;

export default sliceContrast;

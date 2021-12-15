import { createSlice } from '@reduxjs/toolkit';
import { initialStateModalSendComment } from '../../types/core/modalComments';

export const sliceModalSendComment = createSlice({
  name: 'sliceModalSendComment',
  initialState: initialStateModalSendComment,
  reducers: {
    setVisibility: (state, { payload }) => {
      state.isVisible = payload;
    },
    setDataModal: (state, { payload: { postId, userId } }) => {
      state.postId = postId;
      state.userId = userId;
    }
  }
});

export const { setVisibility, setDataModal } = sliceModalSendComment.actions;

export default sliceModalSendComment;

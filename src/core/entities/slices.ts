import { createSlice } from '@reduxjs/toolkit';
import { initialStatePost } from '../types/posts';
import { overwriteDataNormalize } from '../helpers/overwriteDataNormalize';
import { initialStateComments } from '../types/comment';
import { initialStateUsers } from '../types/users';
import { initialStateMe } from '../types/me';

const slicePosts = createSlice({
  name: 'slicePosts',
  initialState: initialStatePost,
  reducers: {
    addPosts: (state, { payload }) => {
      overwriteDataNormalize(payload, state.posts);
    },
    addNewCommentInPost: (state, { payload }) => {
      const { postId, idComment } = payload;
      state.posts.byId[postId].commentIds.push(idComment);
    },
    addPostLike: (state, { payload: { userId, postId } }) => {
      if (state.posts.byId[postId].likes.includes(userId)) {
        state.posts.byId[postId].likes = state.posts.byId[postId].likes.filter(
          (like) => like !== userId
        );
      } else {
        state.posts.byId[postId].likes.push(userId);
      }
    }
  }
});

const sliceComments = createSlice({
  name: 'sliceComments',
  initialState: initialStateComments,
  reducers: {
    addNewItemTest: (state, { payload }) => {
      const { id, userId, postId, msg } = payload;
      console.log(payload, '====');
      state.comments.allIds.push(id);
      state.comments.byId[id] = {
        id,
        userId,
        postId,
        msg
      };
    },
    addComments: (state, { payload }) => {
      overwriteDataNormalize(payload, state.comments);
    }
  }
});

const sliceUsers = createSlice({
  name: 'sliceUsers',
  initialState: initialStateUsers,
  reducers: {
    addUsers: (state, { payload }) => {
      overwriteDataNormalize(payload, state.users);
    }
  }
});

const sliceMe = createSlice({
  name: 'sliceMe',
  initialState: initialStateMe,
  reducers: {
    addMe: (state, { payload }) => {
      state.id = payload.id;
      state.name = payload.name;
      state.username = payload.username;
    }
  }
});

export const { addComments, addNewItemTest } = sliceComments.actions;
export const { addPosts } = slicePosts.actions;
export const { addPostLike } = slicePosts.actions;
export const { addNewCommentInPost } = slicePosts.actions;
export const { addUsers } = sliceUsers.actions;
export const { addMe } = sliceMe.actions;

export default {
  comments: sliceComments.reducer,
  posts: slicePosts.reducer,
  users: sliceUsers.reducer,
  me: sliceMe.reducer
};

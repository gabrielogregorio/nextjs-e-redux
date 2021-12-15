import axios from 'axios';
import {
  addComments,
  addMe,
  addNewItemTest,
  addNewCommentInPost,
  addPosts,
  addUsers
} from './slices';

export const loadPosts = () => (dispatch) => {
  axios
    .get('http://127.0.0.1:3000/api/posts')
    .then((data) => {
      dispatch(addPosts(data.data));
    })
    .catch((error) => {
      console.log('error', error);
    });
};

export const loadComments = () => (dispatch) => {
  axios
    .get('http://127.0.0.1:3000/api/comments')
    .then((data) => {
      dispatch(addComments(data.data));
    })
    .catch((error) => {
      console.log('error', error);
    });
};

export const loadUsers = () => (dispatch) => {
  axios
    .get('http://127.0.0.1:3000/api/users')
    .then((data) => {
      dispatch(addUsers(data.data));
    })
    .catch((error) => {
      console.log('error', error);
    });
};

export const loadMe = () => (dispatch) => {
  axios
    .get('http://127.0.0.1:3000/api/me')
    .then((data) => {
      dispatch(addMe(data.data));
    })
    .catch((error) => {
      console.log('error', error);
    });
};

export const sendNewComment =
  ({ postId, userId, inputSendMessage }) =>
  (dispatch) => {
    let newIdGenerateInServer = Math.floor(1000 * Math.random());

    dispatch(
      addNewItemTest({
        id: newIdGenerateInServer,
        userId,
        postId,
        msg: inputSendMessage
      })
    );

    dispatch(addNewCommentInPost({ postId, idComment: newIdGenerateInServer }));
  };

import { NormalizedData } from './generics';

type postsType = {
  id: number;
  title: string;
  body: string;
  userId: number;
  likes: number[];
  commentIds: number[];
};

export type postStateInterface = {
  posts: {
    allIds: string[];
    byId: NormalizedData<postsType>;
  };
};

export const initialStatePost: postStateInterface = {
  posts: {
    allIds: [],
    byId: {}
  }
};

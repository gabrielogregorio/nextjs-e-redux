import { NormalizedData } from './generics';

type commentType = {
  id: number;
  userId: number;
  postId: number;
  msg: string;
};

export type commentStateInterface = {
  comments: {
    allIds: string[];
    byId: NormalizedData<commentType>;
  };
};

export const initialStateComments: commentStateInterface = {
  comments: {
    allIds: [],
    byId: {}
  }
};

import { NormalizedData } from './generics';

type userType = {
  id: number;
  name: string;
  username: string;
};

interface initialStateInterface {
  users: {
    allIds: string[];
    byId: NormalizedData<userType>;
  };
}

export const initialStateUsers: initialStateInterface = {
  users: {
    allIds: [],
    byId: {}
  }
};

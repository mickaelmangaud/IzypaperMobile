import { HttpLink } from '@apollo/client';

export const link = new HttpLink({
  uri: `http://172.20.64.1:5000/graphql`,
  credentials: 'include',
});
import { HttpLink } from '@apollo/client';

export const link = new HttpLink({
    /* "localhost" does not work, see https://github.com/apollographql/apollo-client/issues/1757 */
    uri: `http://172.20.64.1:5000/graphql`,
    credentials: 'include',
});
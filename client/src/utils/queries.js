import { gql } from '@apollo/client';

export const GET_ME = gql`
  queryMe {
    me {
      _id
      username
      email
      savedBooks: {
        _id
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
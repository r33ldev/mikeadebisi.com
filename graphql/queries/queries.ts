import {gql} from '@apollo/client'

export const GET_ALL_CONTACTS = gql`
  query getAllContacts {
    getAllContacts {
      name
      email
      message
    }
  }
`;

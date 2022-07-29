import { gql } from '@apollo/client';

export const NEW_CONTACT = gql`
  mutation newContact($input: newContactInput!) {
    newContact(input: $input) {
      name
      email
      message
    }
  }
`;
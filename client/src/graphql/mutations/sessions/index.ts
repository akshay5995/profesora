import { gql } from '@apollo/client';

const END_SESSION = gql`
  mutation endSession($sessionId: String!) {
    update_sessions(
      where: { id: { _eq: $sessionId } }
      _set: { expired: true }
    ) {
      affected_rows
    }
  }
`;

const CREATE_SESSION = gql`
  mutation createSession($userId: String!) {
    insert_sessions(objects: { creator_id: $userId }) {
      affected_rows
    }
  }
`;

export { CREATE_SESSION, END_SESSION };

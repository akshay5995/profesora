import { gql } from '@apollo/client';

const GET_QUESTIONS = (isAuthenticated: boolean) =>
  gql(`
  subscription getQuestionsBySession($id: String!) {
    questions(
      where: { session_id: { _eq: $id } }
      order_by: { pinned: desc, upvotes_aggregate: { count: desc } }
    ) {
      id
      text
      created_at
      archived
      pinned
      user {
        ${isAuthenticated ? 'name' : `mock_id`}
      }
      upvotes_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`);

const GET_SESSIONS = gql`
  subscription getSession {
    sessions {
      id
      name
      created_at
    }
  }
`;

export { GET_QUESTIONS, GET_SESSIONS };

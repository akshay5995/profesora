import { gql } from '@apollo/client';

const UPVOTE_QUESTION = gql`
  mutation upVote($session_id: String!, $user_id: String!, $question_id: Int!) {
    insert_upvotes(
      objects: {
        session_id: $session_id
        user_id: $user_id
        question_id: $question_id
      }
    ) {
      affected_rows
    }
  }
`;

const ASK_QUESTION = gql`
  mutation askQuestion($text: String!, $userId: String!, $sessionId: String!) {
    insert_questions(
      objects: { text: $text, user_id: $userId, session_id: $sessionId }
    ) {
      affected_rows
    }
  }
`;

const PIN_QUESTION = gql`
  mutation pinQuestion($question_id: Int!) {
    update_questions(
      where: { id: { _eq: $question_id } }
      _set: { pinned: true }
    ) {
      affected_rows
    }
  }
`;

const UNPIN_QUESTION = gql`
  mutation unPinQuestion($question_id: Int!) {
    update_questions(
      where: { id: { _eq: $question_id } }
      _set: { pinned: false }
    ) {
      affected_rows
    }
  }
`;

const ARCHIEVE_QUESTION = gql`
  mutation archieveQuestion($question_id: Int!) {
    update_questions(
      where: { id: { _eq: $question_id } }
      _set: { archived: true, pinned: false }
    ) {
      affected_rows
    }
  }
`;

export {
  ASK_QUESTION,
  UPVOTE_QUESTION,
  PIN_QUESTION,
  ARCHIEVE_QUESTION,
  UNPIN_QUESTION,
};

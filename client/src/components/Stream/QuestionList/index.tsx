import * as React from 'react';
import { useSubscription, useMutation } from '@apollo/client';
import { Spin, Typography, List, Row, message } from 'antd';
import { GET_QUESTIONS } from '../../../graphql/subscriptions';
import {
  ASK_QUESTION,
  UPVOTE_QUESTION,
  PIN_QUESTION,
  UNPIN_QUESTION,
} from '../../../graphql/mutations/questions';
import { Questions } from '../../../generated/graphql';
import Question from './Question';
import AskArea from './AskArea';
import './index.css';

const { Text } = Typography;

interface Props {
  sessionId?: string;
  isAuthenticated: boolean;
  userId?: string;
}

const QuestionList = ({ sessionId, isAuthenticated, userId }: Props) => {
  const { loading, error, data } = useSubscription(
    GET_QUESTIONS(isAuthenticated),
    {
      variables: { id: sessionId },
    }
  );

  const [upVoteQuestion, { error: upVoteError }] = useMutation(UPVOTE_QUESTION);

  const [askQuestion] = useMutation(ASK_QUESTION, {});

  const [pinQuestion, { error: pinError }] = useMutation(PIN_QUESTION, {});

  const [unpinQuestion] = useMutation(UNPIN_QUESTION, {});

  React.useEffect(() => {
    if (!!upVoteError) {
      message.error("Can't upvote question");
    }
  }, [upVoteError]);

  React.useEffect(() => {
    if (!!pinError) {
      message.error('You can pin only one question');
    }
  }, [pinError]);

  const handleUpVote = (questionId: number) =>
    upVoteQuestion({
      variables: {
        user_id: userId,
        session_id: sessionId,
        question_id: questionId,
      },
    });

  const handleSend = (question: string) =>
    askQuestion({
      variables: { text: question, userId: userId, sessionId: sessionId },
    });

  const handlePin = (questionId: number) =>
    pinQuestion({ variables: { question_id: questionId } });

  const handleUnpin = (questionId: number) =>
    unpinQuestion({ variables: { question_id: questionId } });

  if (loading)
    return (
      <div className="loader">
        <Spin size="large" tip="loading questions" />
      </div>
    );

  if (error) {
    console.log(error);
    return (
      <div className="error">
        <Text type="danger" strong>
          An error occured!
        </Text>
      </div>
    );
  }

  const sortedQuestions: Questions[] = data.questions
    .filter((q: Questions) => !q.archived)
    .sort((a: Questions, b: Questions) => {
      return (
        (a.upvotes_aggregate.aggregate?.count || 0) <
        (b.upvotes_aggregate.aggregate?.count || 0)
      );
    });

  return (
    <>
      <Row style={{ padding: 12 }}>
        <Text style={{ color: '#f0f0f0' }} strong>
          Questions
        </Text>
      </Row>
      <List
        style={{
          padding: 12,
          overflowY: 'scroll',
          height: '85%',
          backgroundColor: 'snow',
        }}
        className="question-container"
        dataSource={sortedQuestions}
        renderItem={(item: Questions) => (
          <List.Item key={item.id} style={{ margin: '4px 0', width: '100%' }}>
            <Question
              key={item.id}
              id={item.id}
              handleUpVote={handleUpVote}
              text={item.text}
              voteCount={item.upvotes_aggregate.aggregate?.count || 0}
              timestamp={item.created_at}
              userName={item.user?.name || 'Some user'}
              isPinned={item.pinned}
              isAuthenticated={isAuthenticated}
              handlePin={handlePin}
              handleUnpin={handleUnpin}
            />
          </List.Item>
        )}
      />
      <AskArea isAuthenticated={isAuthenticated} handleSend={handleSend} />
    </>
  );
};

export default QuestionList;

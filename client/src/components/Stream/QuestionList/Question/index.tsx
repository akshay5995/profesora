import * as React from 'react';
import { Card } from 'antd';
import { QuestionProps } from '../types';
import { Row } from 'antd';
import QuestionMetaData from './QuestionMetadata';
import QuestionText from './QuestionText';
import Timestamp from './QuestionMetadata/Timestamp';

const Question = ({
  text,
  timestamp,
  voteCount,
  userName,
  handleUpVote,
  id,
  isPinned,
  handlePin,
  handleUnpin,
  isAuthenticated,
}: QuestionProps) => {
  const handlePinWithQuestionId = () => handlePin(id);
  const handleUnpinWithQuestionId = () => handleUnpin(id);
  return (
    <Card
      style={{
        borderRadius: '8px',
        width: '100%',
        backgroundColor: isPinned ? 'aquamarine' : 'white',
        boxShadow: isPinned ? '1px 1px 6px' : 'none',
      }}
      size="small"
    >
      <Row style={{ width: '100%', borderBottom: '1px solid #f0f0f0' }}>
        <QuestionMetaData
          userName={userName}
          isPinned={isPinned}
          handlePin={handlePinWithQuestionId}
          handleUnpin={handleUnpinWithQuestionId}
        />
      </Row>
      <Row style={{ width: '100%' }}>
        <QuestionText
          text={text}
          voteCount={voteCount}
          handleUpVote={handleUpVote}
          id={id}
        />
      </Row>
      <Row style={{ width: '100%', justifyContent: 'flex-end' }} align="bottom">
        <Timestamp timestamp={timestamp} />
      </Row>
    </Card>
  );
};

export default Question;

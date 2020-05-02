import * as React from 'react';
import { Typography } from 'antd';
import { Row, Col } from 'antd';
import Vote from './Vote';

const { Text } = Typography;

interface Props {
  voteCount: number;
  text: string;
  handleUpVote: (questionId: number) => void;
  id: number;
}

const QuestionText = ({ voteCount, text, id, handleUpVote }: Props) => {
  const [clicked, setClick] = React.useState(false);

  const handleUpVoteWithQuestion = (id: number) => () => {
    setClick(true);
    handleUpVote(id);
  };

  return (
    <Row className="question-text" style={{ width: '100%' }} align="middle">
      <Col flex="auto" style={{ maxWidth: '74%' }}>
        <Text strong>{text}</Text>
      </Col>
      <Col flex="50px">
        <Vote
          count={voteCount}
          clicked={clicked}
          handleUpVote={handleUpVoteWithQuestion(id)}
        />
      </Col>
    </Row>
  );
};

export default QuestionText;

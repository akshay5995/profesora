import * as React from 'react';
import { Typography } from 'antd';
import { Row, Col, Badge } from 'antd';
import { LikeTwoTone, LikeFilled } from '@ant-design/icons';
import { useAuth0 } from '../../../../../hoc/AuthWrapper';

const { Text } = Typography;

interface Props {
  count: number;
  handleUpVote: () => void;
  clicked: boolean;
}

const Vote = ({ count, handleUpVote, clicked }: Props) => {
  const { isAuthenticated } = useAuth0();

  const handleClick = () => {
    if (isAuthenticated) {
      handleUpVote();
    }
  };
  return (
    <Row style={{ width: '100%' }}>
      <Col flex="auto" style={{ textAlign: 'end' }}>
        <Badge count={count} style={{ backgroundColor: '#52c41a' }} />
      </Col>
      <Col flex="20px" style={{ padding: '4px' }}>
        {clicked ? (
          <LikeFilled style={{ color: 'lightgreen' }} />
        ) : (
          <LikeTwoTone onClick={handleClick} />
        )}
      </Col>
    </Row>
  );
};
export default Vote;

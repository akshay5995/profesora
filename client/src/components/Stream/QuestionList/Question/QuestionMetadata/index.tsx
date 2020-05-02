import * as React from 'react';
import { Typography, Row, Col } from 'antd';
import { PushpinOutlined, PushpinFilled } from '@ant-design/icons';
import { useAuth0 } from '../../../../../hoc/AuthWrapper';

const { Text } = Typography;

interface QuestionMetaDataProps {
  userName?: string;
  isPinned: boolean;
  handlePin: () => void;
  handleUnpin: () => void;
}

const QuestionMetaData = ({
  userName,
  isPinned,
  handlePin,
  handleUnpin,
}: QuestionMetaDataProps) => {
  const { isAuthenticated } = useAuth0();

  const handlePinClick = () => {
    if (isAuthenticated) {
      handlePin();
    }
  };

  return (
    <Row style={{ width: '100%' }}>
      <Col flex="auto">
        <Text style={{ padding: '4px', color: '#001529', fontStyle: 'italic' }}>
          {userName}
        </Text>
      </Col>
      <Col flex="25px">
        {!isPinned ? (
          <PushpinOutlined onClick={handlePinClick} />
        ) : (
          <PushpinFilled onClick={handleUnpin} />
        )}
      </Col>
    </Row>
  );
};

export default QuestionMetaData;

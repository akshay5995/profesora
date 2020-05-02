import * as React from 'react';
import { Input, Row, Col, Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';

const AskArea = ({
  handleSend,
  isAuthenticated,
}: {
  handleSend: (question: string) => void;
  isAuthenticated: boolean;
}) => {
  const [question, setQuestion] = React.useState('');

  const handleChange = (e: any) => setQuestion(e.target.value);

  const handleSendWithClear = () => {
    if (!!question) {
      handleSend(question);
      setQuestion('');
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleSendWithClear();
    }
  };

  return (
    <Row style={{ height: '50px' }}>
      <Col style={{ height: 'inherit' }} flex="auto">
        <Input
          style={{ height: 'inherit' }}
          placeholder={
            isAuthenticated ? 'Enter your question' : 'Login to ask questions'
          }
          value={question}
          disabled={!isAuthenticated}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </Col>
      <Col style={{ height: 'inherit' }} flex="30px">
        <Button
          style={{ height: 'inherit', paddingBottom: '5px' }}
          type="primary"
          disabled={!isAuthenticated}
          icon={<SendOutlined />}
          onClick={handleSendWithClear}
        >
          Ask
        </Button>
      </Col>
    </Row>
  );
};

export default AskArea;

import * as React from 'react';
import { List, Button, Row, Typography, Col } from 'antd';
import { DeleteTwoTone } from '@ant-design/icons';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

interface Props {
  id: string;
  createdAt: string;
  handleEndSession: () => void;
}

const { Text } = Typography;

const Session = ({ id, createdAt, handleEndSession }: Props) => {
  const date = format(new Date(createdAt), 'dd/MM/yy HH:mm:ss');

  return (
    <List.Item>
      <Row style={{ width: '100%' }}>
        <Col flex="auto">
          <Link to={`stream/${id}`}>
            <Button type="link" block>
              {id}
            </Button>
          </Link>
        </Col>
        <Col flex="135px">
          <Text>{date}</Text>
        </Col>
        <Col flex="25px" style={{ margin: '3px' }}>
          <DeleteTwoTone onClick={handleEndSession} />
        </Col>
      </Row>
    </List.Item>
  );
};

export default Session;

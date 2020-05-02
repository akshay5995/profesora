import * as React from 'react';
import { useSubscription, useMutation } from '@apollo/client';
import { GET_SESSIONS } from '../../../graphql/subscriptions';
import {
  CREATE_SESSION,
  END_SESSION,
} from '../../../graphql/mutations/sessions';
import { Spin, Typography, List, Card, message, Button } from 'antd';
import { Sessions } from '../../../generated/graphql';
import Session from './Session';

interface Props {
  userId: string;
  userName?: string;
}

const { Text } = Typography;

const SessionsList = ({ userId, userName }: Props) => {
  const { loading, error, data } = useSubscription(GET_SESSIONS, {});

  const [createNewSession, { error: createSessionError }] = useMutation(
    CREATE_SESSION
  );

  const [endSession, { error: endSessionError }] = useMutation(END_SESSION);

  const handleCreateSession = () =>
    createNewSession({ variables: { userId: userId } });

  const handleEndSession = (id: string) =>
    endSession({ variables: { sessionId: id } });

  React.useEffect(() => {
    if (!!createSessionError) {
      message.error('Unable to create session');
    }
  }, [createSessionError]);

  if (loading)
    return (
      <div className="loader">
        <Spin size="large" tip="Loading sessions..." />
      </div>
    );

  if (error) {
    return (
      <div className="error">
        <Text type="danger" strong>
          An error occured!
        </Text>
      </div>
    );
  }

  return (
    <Card
      title={`Welcome, ${userName}!`}
      extra={
        <Button type="primary" block onClick={handleCreateSession}>
          Create new session
        </Button>
      }
      bordered={false}
      style={{ width: '100%', height: '100%' }}
      bodyStyle={{ height: '100%' }}
    >
      <List
        header={<div>Sessions</div>}
        bordered
        dataSource={data.sessions}
        style={{ height: '80%' }}
        renderItem={(item: Sessions) => (
          <Session
            id={item.id}
            createdAt={item.created_at}
            handleEndSession={() => handleEndSession(item.id)}
          />
        )}
      />
    </Card>
  );
};

export default SessionsList;

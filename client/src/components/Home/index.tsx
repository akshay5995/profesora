import * as React from 'react';
import { Layout, Result } from 'antd';
import { useAuth0 } from '../../hoc/AuthWrapper';
import LoginButton from '../AppBar/LoginButton';
import SessionList from './SessionsList';

const { Content } = Layout;

const Home = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <Content
      style={{
        margin: '90px 24px 24px 24px',
        background: 'snow',
      }}
    >
      {isAuthenticated ? (
        <SessionList userId={user?.sub} userName={user?.given_name} />
      ) : (
        <Result
          status="403"
          style={{ width: '100%', height: '100%' }}
          title="Login to create or view live session"
          extra={<LoginButton />}
        />
      )}
    </Content>
  );
};

export default Home;

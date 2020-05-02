import * as React from 'react';
import QuestionList from './QuestionList';
import { Layout, Breadcrumb, Input } from 'antd';
import { useLocation } from 'react-router-dom';
import { pathToPage } from '../../utils/routes';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '../../hoc/AuthWrapper';
import './index.css';

const { Content: AntContent, Sider } = Layout;

const Content = () => {
  const location = useLocation();
  const { sessionId } = useParams();

  const { user, isAuthenticated } = useAuth0();

  const userId = user?.sub;

  const page: string = pathToPage[location.pathname];

  const renderStreamWithQuestions = () => (
    <>
      <AntContent>Livestream</AntContent>
      <Sider className="questions">
        <QuestionList
          sessionId={sessionId}
          isAuthenticated={isAuthenticated}
          userId={userId}
        />
      </Sider>
    </>
  );

  const renderStreamIdForm = () => (
    <AntContent>
      <Input addonBefore="http://" suffix=".com" defaultValue="mysite" />
    </AntContent>
  );

  return (
    <AntContent
      className="site-layout"
      style={{ padding: '0 50px', marginTop: 64 }}
    >
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>{page}</Breadcrumb.Item>
      </Breadcrumb>
      <Layout style={{ height: '90%' }}>
        {!!sessionId ? renderStreamWithQuestions() : renderStreamIdForm()}
      </Layout>
    </AntContent>
  );
};

export default Content;

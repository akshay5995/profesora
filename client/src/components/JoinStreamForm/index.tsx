import * as React from 'react';
import { Layout, Breadcrumb, Input, Card, Result } from 'antd';
import { useHistory } from 'react-router-dom';

const { Content: AntContent } = Layout;
const { Search } = Input;

const JoinStreamForm = () => {
  const [sessionId, setSessionId] = React.useState('');
  const history = useHistory();

  const handleJoin = () => {
    if (!sessionId) {
      return;
    }
    history.push({ pathname: `/stream/${sessionId}` });
  };

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSessionId(e.target.value);
  };

  return (
    <AntContent
      className="site-layout"
      style={{ padding: '0 50px', marginTop: 64 }}
    >
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Join stream</Breadcrumb.Item>
      </Breadcrumb>
      <Layout style={{ height: '90%' }}>
        <Card style={{ height: '100%', width: '100%' }}>
          <Result
            status="404"
            title="Join Stream"
            extra={
              <Search
                onChange={handleChange}
                placeholder="Enter stream ID here"
                enterButton="Join"
                onSearch={handleJoin}
              />
            }
          />
        </Card>
      </Layout>
    </AntContent>
  );
};

export default JoinStreamForm;

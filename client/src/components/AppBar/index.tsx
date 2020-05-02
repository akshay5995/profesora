import * as React from 'react';
import { Space, Layout, Menu, Typography, Row, Col } from 'antd';
import { useLocation, useHistory } from 'react-router-dom';
import { pageToPath, pathToPage } from '../../utils/routes';
import LoginButton from './LoginButton';
import './index.css';
import { ClickParam } from 'antd/lib/menu';

const { Header } = Layout;
const { Title } = Typography;

const AppBar = () => {
  const location = useLocation();
  const history = useHistory();

  const [paths, setPaths] = React.useState<string[]>([]);
  const page = pathToPage[location.pathname];

  const handlePageChange = React.useCallback(
    ({ key, keyPath, item, domEvent }: ClickParam) => {
      history.push(pageToPath[key]);
    },
    []
  );

  React.useEffect(() => {
    setPaths(Object.keys(pageToPath));
  }, []);

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Title className="title" level={2}>
        <Space size={8}>
          Profesora
        </Space>
      </Title>
      <Row style={{ width: '100%' }}>
        <Col flex="auto">
          <Menu
            onClick={handlePageChange}
            theme="dark"
            mode="horizontal"
            style={{ marginLeft: '24px' }}
            selectedKeys={[page]}
            selectable={true}
          >
            {paths.length &&
              paths.map((p: string) => <Menu.Item key={p}>{p}</Menu.Item>)}
          </Menu>
        </Col>
        <Col flex="60px" style={{ padding: '12px 0 12px 0' }}>
          <LoginButton />
        </Col>
      </Row>
    </Header>
  );
};

export default AppBar;

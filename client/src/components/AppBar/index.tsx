import * as React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const AppBar = () => (
  <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1">Home</Menu.Item>
    </Menu>
  </Header>
);

export default AppBar;

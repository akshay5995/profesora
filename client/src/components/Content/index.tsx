import * as React from 'react';
import { Layout, Breadcrumb } from 'antd';

const { Content: AntContent } = Layout;

const Content = () => (
  <AntContent className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
    </Breadcrumb>
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 380 }}
    >
      Content
    </div>
  </AntContent>
);

export default Content;

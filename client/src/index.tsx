import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { Layout } from 'antd';
import AppBar from "./components/AppBar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import 'antd/dist/antd.css';
import './styles/index.css';


class App extends Component {
  render() {
    return (
      <Layout style={{ height: '100%', width: '100%' }}>
        <AppBar />
        <Content />
        <Footer />
      </Layout>
    );
  }
}

render(<App />, document.getElementById('root'));

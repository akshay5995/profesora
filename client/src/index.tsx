import * as React from 'react';
import { render } from 'react-dom';
import { Auth0Provider } from './hoc/AuthWrapper';
import 'antd/dist/antd.css';
import './index.css';
import Main from './components/Main';

const App = (): JSX.Element => {
  return (
    <Auth0Provider>
      <Main />
    </Auth0Provider>
  );
};

render(<App />, document.getElementById('root'));

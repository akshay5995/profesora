import * as React from 'react';
import { Layout } from 'antd';
import { ApolloProvider } from '@apollo/client';
import AppBar from './AppBar';
import Content from './Stream';
import Footer from './Footer';
import Home from './Home';
import client from '../graphql/client';
import { useAuth0 } from '../hoc/AuthWrapper';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import JoinStreamForm from './JoinStreamForm';

const Main = (): JSX.Element => {
  const [token, setToken] = React.useState<String | undefined>('');
  const { getTokenSilently } = useAuth0();

  React.useEffect(() => {
    const setAuthToken = async () => {
      try {
        const token = await getTokenSilently();
        setToken(token);
      } catch (e) {}
    };
    setAuthToken();
  }, [getTokenSilently]);

  return (
    <ApolloProvider client={client({ token })}>
      <Layout style={{ height: '100%', width: '100%' }}>
        <Router>
          <AppBar />
          <Switch>
            <Route path="/stream/:sessionId">
              <Content />
            </Route>
            <Route exact path="/stream">
              <JoinStreamForm />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </Layout>
    </ApolloProvider>
  );
};

export default Main;

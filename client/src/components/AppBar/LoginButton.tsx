import * as React from 'react';
import { Button } from 'antd';
import { useAuth0 } from '../../hoc/AuthWrapper';
import UserAction from './UserAction';

const LoginButton = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
    isInitializing,
  } = useAuth0();

  const userName = user?.given_name;

  if (isAuthenticated) {
    return <UserAction name={userName} logout={logout} />;
  }

  return (
    <Button
      loading={isInitializing}
      type="primary"
      onClick={() => loginWithRedirect({})}
    >
      Login
    </Button>
  );
};

export default LoginButton;

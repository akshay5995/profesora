import * as React from 'react';
import { Dropdown, Button, Menu } from 'antd';
import {
  DownOutlined,
  PoweroffOutlined,
  UserOutlined,
} from '@ant-design/icons';

interface Props {
  name: string;
  logout: () => void;
}

const UserAction = ({ name, logout }: Props) => {
  const handleMenuClick = (e: any) => {
    console.log('click', e);
    switch (e.key) {
      case 'logout':
        logout();
      default:
        console.log(e);
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="logout">
        <PoweroffOutlined />
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Button>
        <UserOutlined />
        {name} <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default UserAction;

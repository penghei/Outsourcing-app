import React from 'react';
import { Layout, Menu, Divider, message } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { history } from 'umi';
import './index.less';
import { emptyStorage } from '@/hooks/useStorage';

const { Sider } = Layout;
const { SubMenu } = Menu;

interface IProps {}
const PageSider: React.FC<IProps> = (props) => {
  const routeTo = (e: any) => {
    if (e.key === 'userlist' || e.key === 'logout') return;
    history.push(`/main/${e.key}`);
  };

  const handleLogout = (e: any) => {
    if (emptyStorage('jwt')) {
      message.success('退出成功');
      history.push('/');
    } else {
      message.error('退出登录失败');
    }
  };

  return (
    <Sider>
      <header className="welcome-block">
        <p className="welcome-text">欢迎使用管理员系统</p>
      </header>
      <Divider />
      <Menu
        theme="dark"
        defaultSelectedKeys={['1']}
        mode="inline"
        onClick={routeTo}
      >
        <Menu.Item key="setting" icon={<DesktopOutlined />}>
          配置活动
        </Menu.Item>
        <SubMenu key="userlist" icon={<UserOutlined />} title="用户信息">
          <Menu.Item key="userlist-records">用户秒杀记录</Menu.Item>
          <Menu.Item key="userlist-access">用户准入记录</Menu.Item>
        </SubMenu>
        <Menu.Item key="data" icon={<PieChartOutlined />}>
          数据展示
        </Menu.Item>
        <Menu.Item
          key="logout"
          icon={<LogoutOutlined />}
          onClick={handleLogout}
        >
          退出登录
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
export default PageSider;

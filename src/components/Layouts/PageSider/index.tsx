import React from 'react';
import { Layout, Menu, Divider } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { history } from 'umi';
import './index.less';

const { Sider } = Layout;
const { SubMenu } = Menu;

interface IProps {}
const PageSider: React.FC<IProps> = (props) => {
  const routeTo = (e: any) => {
    e.key !== 'userlist' && history.push(`/main/${e.key}`);
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
      </Menu>
    </Sider>
  );
};
export default PageSider;

import { Layout, Menu, Divider } from 'antd';
import { DesktopOutlined, PieChartOutlined,UserOutlined } from '@ant-design/icons';
import React from 'react';
const { Header, Content, Footer, Sider } = Layout;
import { history } from 'umi';
import './index.less';

interface IProps {}

const Layouts: React.FC<IProps> = (props) => {

  const routeTo = (e:any) => {
    history.push(`/${e.key}`)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <header className="welcome-block" onClick={()=>{history.push('/admin')}}>
          <p className="welcome-text">欢迎使用管理员系统</p>
        </header>
        <Divider />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={routeTo}>

          <Menu.Item key="admin" icon={<UserOutlined />}>
            管理员信息
          </Menu.Item>
          <Menu.Item key="setting" icon={<DesktopOutlined />}>
            配置活动
          </Menu.Item>
          <Menu.Item key="userlist" icon={<DesktopOutlined />}>
            用户总览
          </Menu.Item>
          <Menu.Item key="data" icon={<PieChartOutlined />}>
            数据展示
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
        <Content style={{ margin: '0 16px' }}>
          <div>{props.children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>GlimmerStudio @2021</Footer>
      </Layout>
    </Layout>
  );
};

export default Layouts;

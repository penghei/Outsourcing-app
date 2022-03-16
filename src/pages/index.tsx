import { Layout, Menu, Divider } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React from 'react';
import { history } from 'umi';
import { RecoilRoot } from 'recoil';
import PageSider from '@/components/Layouts/PageSider';

import './index.less';
import PageFooter from '@/components/Layouts/PageFooter';

const { Header, Content, Footer, Sider } = Layout;


interface IProps {}

const Layouts: React.FC<IProps> = (props) => {
  const routeTo = (e: any) => {
    history.push(`/main/${e.key}`);
  };

  return (
    <RecoilRoot>
      <Layout style={{ minHeight: '100vh' }}>
        <PageSider />
        <Layout className="site-layout">
          {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
          <Content style={{ margin: '0 16px' }}>
            <div>{props.children}</div>
          </Content>
         <PageFooter />
        </Layout>
      </Layout>
    </RecoilRoot>
  );
};

export default Layouts;

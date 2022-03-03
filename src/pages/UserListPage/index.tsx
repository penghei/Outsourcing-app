import React from 'react';
import { Layout, Divider } from 'antd';
import PageHeader from '@/components/Layouts/PageHeader';
import './index.less';
import UserInfoTable from '@/components/UserLists/UserInfoTable';

const { Header, Footer, Sider, Content } = Layout;

interface IProps {}
const UserListPage: React.FC<IProps> = (props) => {
  return (
    <div className="setting-page">
      <Layout>
        <PageHeader text="用户信息" route="/userlist" />
        <Content className="setting-content">
            <UserInfoTable/>
        </Content>
      </Layout>
    </div>
  );
};
export default UserListPage;

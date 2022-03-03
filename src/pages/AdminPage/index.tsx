import React from 'react';
import { Layout, Divider } from 'antd';
import PageHeader from '@/components/Layouts/PageHeader';
import './index.less';
import AdminInfo from '@/components/Admin/AdminInfo';

const { Header, Footer, Sider, Content } = Layout;

interface IProps {}
const AdminPage: React.FC<IProps> = (props) => {
  return (
    <div className="admin-page">
      <Layout>
        <PageHeader text="管理员信息" route="/admin" />
        <Content className="admin-content">
          <AdminInfo />
        </Content>
      </Layout>
    </div>
  );
};
export default AdminPage;

import React from 'react';
import AdminInfo from '@/components/Admin/AdminInfo';
import PageContent from '@/components/Layouts/PageContent';
import './index.less';

interface IProps {}
const AdminPage: React.FC<IProps> = (props) => {
  return (
    <div className="admin-page">
      <PageContent
        headerText="管理员信息"
        headerRoute="/admin"
        className="admin-content"
      >
        <AdminInfo />
      </PageContent>
      {/* <Layout>
        <PageHeader text="管理员信息" route="/admin" />
        <Content className="admin-content">
          
        </Content>
      </Layout> */}
    </div>
  );
};
export default AdminPage;

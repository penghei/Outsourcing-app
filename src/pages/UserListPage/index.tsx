import React from 'react';
import UserInfoTable from '@/components/UserLists/UserInfoTable';
import PageContent from '@/components/Layouts/PageContent';
import './index.less';

interface IProps {}
const UserListPage: React.FC<IProps> = (props) => {
  return (
    <div className="userlist-page">
      <PageContent
        headerText="用户信息"
        headerRoute="/userlist"
        className="userlist-content"
      >
        <UserInfoTable />
      </PageContent>
    </div>
  );
};
export default UserListPage;

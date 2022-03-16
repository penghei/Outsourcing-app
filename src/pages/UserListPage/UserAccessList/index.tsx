import React from 'react';
import UserInfoTable from '@/components/UserLists/UserInfoTable';
import PageContent from '@/components/Layouts/PageContent';
import './index.less';

interface IProps {}
const UserAccessList: React.FC<IProps> = (props) => {
  return (
    <div className="user-access-page">
      <PageContent
        headerText="用户准入记录"
        headerRoute="/userlist-access"
        className="user-access-content"
      >
        <UserInfoTable />
      </PageContent>
    </div>
  );
};
export default UserAccessList;

import React from 'react';
import UserInfoTable from '@/components/UserLists/UserInfoTable';
import PageContent from '@/components/Layouts/PageContent';
import './index.less';
import UserRecordTable from '@/components/UserLists/UserRecordTable';

interface IProps {}
const UserRecordList: React.FC<IProps> = (props) => {
  return (
    <div className="user-record-page">
      <PageContent
        headerText="用户秒杀记录"
        headerRoute="/userlist-record"
        className="user-record-content"
      >
        <UserRecordTable />
      </PageContent>
    </div>
  );
};
export default UserRecordList;

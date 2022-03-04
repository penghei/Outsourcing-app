import React from 'react';
import SettingsForm from '@/components/Settings/SettingsForm';
import PageContent from '@/components/Layouts/PageContent';
import './index.less';

interface IProps {}
const SettingPage: React.FC<IProps> = (props) => {
  return (
    <div className="setting-page">
      <PageContent
        headerText="配置活动"
        headerRoute="/setting"
        className="setting-content"
      >
        <SettingsForm />
      </PageContent>
    </div>
  );
};
export default SettingPage;

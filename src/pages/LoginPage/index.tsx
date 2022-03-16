import React from 'react';
import { Tabs } from 'antd';
import './index.less';
import LoginForm from '@/components/Login/LoginForm';
import { RecoilRoot } from 'recoil';

const { TabPane } = Tabs;

interface IProps {}
const LoginPage: React.FC<IProps> = (props) => {
  const handleChangeTabs = () => {};

  return (
    <RecoilRoot>
      <div className="login-page">
        <main className="login-block">
          <Tabs onChange={handleChangeTabs} type="card" size="large">
            <TabPane tab="登录" key="1">
              <LoginForm />
            </TabPane>
          </Tabs>
        </main>
      </div>
    </RecoilRoot>
  );
};
export default LoginPage;

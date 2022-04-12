import React, { useEffect } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import { Button } from 'antd';
import { withRouter, Link, Route } from 'react-router-dom';
import './index.scss'
import { Tabs } from 'antd';

const LoginContainer = () => {
    const { TabPane } = Tabs;
    
    function callback(key) {
    }

    return (
        <div className='box-container'>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="登录" key="1">
                    <LoginForm />
                </TabPane>
                <TabPane tab="注册" key="2" className='tab-register'>
                    <RegistrationForm />
                </TabPane>
            </Tabs>
        </div>

    );
}

export default withRouter(LoginContainer);

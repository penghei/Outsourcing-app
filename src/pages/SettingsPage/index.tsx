import React from 'react'
import {Layout,Divider } from 'antd'
import PageHeader from '@/components/Layouts/PageHeader';
import './index.less'
import SettingsForm from '@/components/Settings/SettingsForm';

const { Header, Footer, Sider, Content } = Layout;

interface IProps{
    
}
const SettingPage:React.FC<IProps> = (props) => {
    return(
        <div className='setting-page'>
            <Layout>
                <PageHeader text='配置活动' route='/setting'/>
                <Content className='setting-content'>
                    <SettingsForm />
                </Content>
            </Layout>
        </div>
    )
}
export default SettingPage
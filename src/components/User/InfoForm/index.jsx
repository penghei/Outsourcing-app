import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import { ContactsTwoTone, QuestionCircleTwoTone, SettingTwoTone, DollarTwoTone, EditTwoTone, AlertTwoTone, AccountBookTwoTone, CarryOutTwoTone } from '@ant-design/icons';
import RegistrationForm from 'components/RegistrationForm';
import './index.scss'

const { TabPane } = Tabs;
const InfoForm = () => {
    return (
        <div className='show_box'>
            <Tabs defaultActiveKey="1">
                <TabPane
                    tab={
                        <span>
                            <EditTwoTone />
                            编辑资料
                        </span>
                    }
                    key="1"
                >
                    <div className="edit"><RegistrationForm /></div>
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <AlertTwoTone />
                            账号安全
                        </span>
                    }
                    key="2"
                >
                    Tab 2
                </TabPane>
            </Tabs>
        </div>
    );
}

export default InfoForm;
import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import { ContactsTwoTone, QuestionCircleTwoTone, SettingTwoTone, DollarTwoTone, EditTwoTone, AlertTwoTone, AccountBookTwoTone, CarryOutTwoTone } from '@ant-design/icons';
import './index.scss'


const { TabPane } = Tabs;
const OrderForm = () => {
    return (
        <div className='show_box'>
            <Tabs defaultActiveKey="1">
                <TabPane
                    tab={
                        <span>
                            <AccountBookTwoTone />
                            我的订单
                        </span>
                    }
                    key="1"
                >
                    Tab 1
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <CarryOutTwoTone />
                            我的预约
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

export default OrderForm;
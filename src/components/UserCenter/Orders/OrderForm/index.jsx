import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import { ContactsTwoTone, QuestionCircleTwoTone, SettingTwoTone, DollarTwoTone, EditTwoTone, AlertTwoTone, AccountBookTwoTone, CarryOutTwoTone } from '@ant-design/icons';
import MyOrder from '../MyOrder'
import axios from 'axios';
import './index.scss'
//这个是测试的商品列表数据
import { allGoodsListTestData } from '../../../../response_data_example';


const { TabPane } = Tabs;
const OrderForm = () => {
    // const [productsInfo, setproductsInfo] = useState(allGoodsListTestData);
   
    const [orderList,setOrderList] = useState(allGoodsListTestData)

    useEffect(async ()=>{
    //   const {data} = await service.get(`/api2/customer/product/records`)
    //   if(data.success){
    //     setOrderList(data.data)
    //   }
    },[])
    

    return (
        <div className='show_box'>
            <Tabs defaultActiveKey="1">
                <TabPane
                    tab={<span><AccountBookTwoTone />我的订单</span>}
                    key="1"
                >
                    {orderList.map((value, index) => {
                        return <MyOrder key={index} {...value} />;
                    })}
                </TabPane>
                <TabPane
                    tab={<span><CarryOutTwoTone />我的预约</span>}
                    key="2"
                >Tab 2
                </TabPane>
            </Tabs>
        </div>
    );
}

export default OrderForm;
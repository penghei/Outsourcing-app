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
    const [productsInfo, setproductsInfo] = useState(allGoodsListTestData);
    /*todo:小疑惑：请求参数pageId,userId又如何获取呢，我在接口文档中查看，好像并没有可以请求的接口*/
    // useEffect(()=>{
    //   axios.get('/records?pageId=2&userId=239382923')
    //   .then(function(res){
    //       console.log(res);
    //       setproductInfo(res.data);
    //     })
    //     .catch(function(err){
    //       console.log(err);
    //     });
    // })
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
                    {
                        productsInfo.map((value, index) => {
                            return <MyOrder key={index} {...value} />;
                        })
                    }
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
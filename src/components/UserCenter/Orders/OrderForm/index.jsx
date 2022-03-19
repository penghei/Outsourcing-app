import React, { useEffect,useState } from 'react';
import { Tabs } from 'antd';
import {ContactsTwoTone,QuestionCircleTwoTone,SettingTwoTone,DollarTwoTone,EditTwoTone,AlertTwoTone,AccountBookTwoTone,CarryOutTwoTone } from '@ant-design/icons';
import MyOrder from '../MyOrder'
import axios from 'axios';
import './index.scss'


const { TabPane } = Tabs;
const OrderForm = () => {
    const data=[
    {
        tradeId:124121,
        productName:"合家幸运贷",
        tradeMoney:9620,
        tradeTime:'23-1-21 下午12:12',
        productDescription:"高回报，高收益，短线稳定贷款产品，适用于家庭理财,高回报，高收益，短线稳定贷款产品，适用于家庭理财,高回报，高收益，短线稳定贷款产品，适用于家庭理财"
    },
    {
        tradeId:124122,
        productName:"哇哈哈",
        tradeMoney:100,
        tradeTime:'23-1-21',
        productDescription:"高回报，高收益，短线稳定贷款产品，适用于家庭理财"
    },
    {
        tradeId:124123,
        productName:"多聚理财福袋",
        tradeMoney:9999,
        tradeTime:'23-1-21',
        productDescription:"高回报，高收益，短线稳定贷款产品，适用于家庭理财"
    }
    ]
    const[productsInfo,setproductsInfo]=useState(data);
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
                    productsInfo.map(function(value,index){
                        return <MyOrder key={value.tradeId} {...value}/>;
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
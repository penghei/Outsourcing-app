import React, { useEffect, useState } from 'react';
import { Empty, Tabs } from 'antd';
import { AccountBookTwoTone, CarryOutTwoTone } from '@ant-design/icons';
import UserOrder from './UserOrderBlock';
import UserPurse from '../UserPurse';
import axios from 'axios';
import service from '../../../../myaxios/interceptors'
import './index.scss'
//这个是测试的商品列表数据
import { useRecoilValue } from 'recoil';
import { AllGoodsList } from '../../../../store/atoms'


const { TabPane } = Tabs;
const OrderForm = () => {

    const allGoodsList = useRecoilValue(AllGoodsList)
    const [orderList, setOrderList] = useState([])

    useEffect(async () => {
        try {
            const { data } = await service.get(`/api1/customer/product/records`)
            console.log(data)
            if (data.success) {
                const tradeList = data.data;
                let filteredGoods = [];
                for (let trade of tradeList) {
                    for (let goods of allGoodsList) {
                        if (goods.productId === trade.activityId) {
                            filteredGoods.push({
                                ...goods,
                                ...trade
                            })
                        }
                    }
                }
                console.log(filteredGoods)
                setOrderList(filteredGoods)
            } else {
                setOrderList([])
            }
        } catch (err) {
            console.log("USER ORDER ERROR", err)
        }

    }, [])


    return (
        <div className='show_box'>
            <Tabs defaultActiveKey="1">
                <TabPane
                    tab={<span><AccountBookTwoTone />我的订单</span>}
                    key="1"
                >
                    {
                        orderList.length ?
                            orderList.map((value, index) => {
                                return <UserOrder key={index} {...value} />;
                            })
                            : (<Empty/>)
                    }
                </TabPane>
                <TabPane
                    tab={<span><CarryOutTwoTone />我的钱包</span>}
                    key="2"
                >
                    <UserPurse />
                </TabPane>
            </Tabs>
        </div>
    );
}

export default OrderForm;
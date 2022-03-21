import React, { useState } from 'react';
import { Card } from 'antd';
import { useSetRecoilState } from 'recoil';
import { SeckillingGoodsInfo } from '@/store/atoms';
import { withRouter } from 'react-router-dom';

import './index.scss'


const ShoppingCard = ({ goodsProps,history }) => {
    const {productName:name,productImgUrl:pic,...otherProps} = goodsProps;

    const setSeckillingGoodsInfo = useSetRecoilState(SeckillingGoodsInfo)

    const routeToGoods = (item) => {
        console.log(item)
        // setSeckillingGoodsInfo(item)
        // history.push({
        //     pathname: '/home/goods',
        // })
    }

    return (
        <>
            <Card
                hoverable
                className="shopping-card"
                onClick={() => { routeToGoods(goodsProps) }}
                cover={<img alt={name} src="http://localhost:3000/src/assest/money.png" />}
            >
                
                <p>{name}</p>
            </Card>
        </>
    );
}

export default withRouter(ShoppingCard);

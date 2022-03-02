import React, { useState } from 'react';
import { Card } from 'antd';
import { useSetRecoilState } from 'recoil';
import { selectedGoodsInfo } from '@/store/atoms';
import { withRouter } from 'react-router-dom';

import './index.scss'


const ShoppingCard = ({ goodsProps,history }) => {
    const {name,pic,...otherProps} = goodsProps;

    const setSelectedGoodsInfo = useSetRecoilState(selectedGoodsInfo)

    const routeToGoods = (item) => {
        console.log(item)
        setSelectedGoodsInfo(item)
        history.push({
            pathname: '/home/goods'
        })
    }
    return (
        <>
            <Card
                hoverable
                cover={<img alt={name} src={pic} />}
                className="shopping-card"
                onClick={() => { routeToGoods(goodsProps) }}
            >
                <p>{name}</p>
            </Card>
        </>
    );
}

export default withRouter(ShoppingCard);

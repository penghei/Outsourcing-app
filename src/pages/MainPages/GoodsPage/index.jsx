import React, { useEffect } from 'react';
import GoodsPurchase from 'components/Goods/GoodsPurchase';
import './index.scss'
import GoodsIntroduction from '../../../components/Goods/GoodsDetail/GoodsIntroduction';
import GoodsRecommand from '../../../components/Goods/GoodsDetail/GoodsRecommand';
import { useRecoilValue } from 'recoil';
import {selectedGoodsInfo} from '@/store/atoms.js'

/**该组件在被挂载时通过atom中的 当前选择商品 状态获取商品信息,并传给几个子组件*/
const GoodsPage = () => {

    const testGoodsInfo = useRecoilValue(selectedGoodsInfo)

    // const testGoodsInfo = {
    //     pic: '#',
    //     name: 'aaaaaaaaaaaaaaa',
    //     price: '12345',
    //     amount: '123',
    //     startTime: '2022/03/02/12/23',
    //     endTime: '2022/04/02/00/00',
    //     id: '123456',
    //     details:'这是一个很好的理财产品,孩子吃了还要吃,敏感肌也能用,下次还会再买'
    // }


    return (
        <div className='goods-page'>
            <header className='goods-purchase'>
                <GoodsPurchase goodsInfo={testGoodsInfo} />
            </header>
            <main className='goods-details'>
                <GoodsIntroduction />
                <GoodsRecommand goodsDetail={testGoodsInfo.details} />
            </main>
        </div>
    );
}

export default GoodsPage;

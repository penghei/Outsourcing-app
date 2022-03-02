import React, { useEffect } from 'react';
import GoodsPurchase from 'components/Goods/GoodsPurchase';
import './index.scss'
import GoodsIntroduction from 'components/Goods/GoodsDetail/GoodsIntroduction';
import GoodsRecommand from 'components/Goods/GoodsDetail/GoodsRecommand';
import { useRecoilValue } from 'recoil';
import {selectedGoodsInfo} from '@/store/atoms.js'

/**该组件在被挂载时通过atom中的 当前选择商品 状态获取商品信息,并传给几个子组件*/
const GoodsPage = () => {

    const goodsInfo = useRecoilValue(selectedGoodsInfo)

    return (
        <div className='goods-page'>
            <header className='goods-purchase'>
                <GoodsPurchase goodsInfo={goodsInfo} />
            </header>
            <main className='goods-details'>
                <GoodsIntroduction goodsDetail={goodsInfo.details}/>
                <GoodsRecommand  recommandList={[goodsInfo,goodsInfo]}/>
            </main>
        </div>
    );
}

export default GoodsPage;

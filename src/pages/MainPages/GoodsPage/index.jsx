import React, { useEffect } from 'react';
import GoodsPurchase from 'components/Goods/GoodsPurchase';
import GoodsIntroduction from 'components/Goods/GoodsDetail/GoodsIntroduction';
import GoodsRecommand from 'components/Goods/GoodsDetail/GoodsRecommand';
import { useRecoilState } from 'recoil';
import { SeckillingGoodsInfo } from '@/store/atoms.js'
import './index.scss'
import axios from 'axios';

/**该组件在被挂载时通过atom中的 当前选择商品 状态获取商品信息,并传给几个子组件*/
const GoodsPage = () => {

    const [goodsInfo,setGoodsInfo] = useRecoilState(SeckillingGoodsInfo)

    useEffect(async () => {
        let res = await axios.get('/api/goods');
        console.log(res)
        setGoodsInfo(res.data)
    }, [])

    return (
        <div className='goods-page'>
            <header className='goods-purchase'>
                <GoodsPurchase {...goodsInfo} />
            </header>
            <main className='goods-details'>
                <GoodsIntroduction {...goodsInfo} />
                <GoodsRecommand recommandList={[goodsInfo]} />
            </main>
        </div>
    );
}

export default GoodsPage;

import React, { useEffect } from 'react';
import GoodsPurchase from 'components/Goods/GoodsPurchase';
import GoodsIntroduction from 'components/Goods/GoodsDetail/GoodsIntroduction';
import { useRecoilState } from 'recoil';
import { SeckillingGoodsInfo } from '@/store/atoms.js'
import './index.scss'
import axios from 'axios';
import service from '@/myaxios/interceptors'
import money from '@/assest/money.png'
import GoodsList from '../../../components/Goods/GoodsList';


const GoodsPage = () => {

    const [goodsInfo, setGoodsInfo] = useRecoilState(SeckillingGoodsInfo)

    return (<>
        <div className="goods-banner">
            <div className="slogan"></div>
            <div className="circle"></div>
            <div className="computer"></div>
        </div>

        <div className='goods-page'>
            <header className='goods-purchase'>
                <GoodsList />
                <GoodsPurchase {...goodsInfo} />
            </header>
            <main className='goods-details'>
                <GoodsIntroduction {...goodsInfo} />
            </main>
        </div>
    </>

    );
}

export default GoodsPage;

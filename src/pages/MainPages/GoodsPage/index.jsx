import React, { useEffect, useState } from 'react';
import GoodsPurchase from '../../../components/Goods/GoodsPurchase';
import GoodsIntroduction from '../../../components/Goods/GoodsIntroduction';
import { useRecoilState, useRecoilValue } from 'recoil';
import { SeckillingGoodsInfo } from '@/store/atoms.js'
import './index.scss'
import axios from 'axios';
import service from '@/myaxios/interceptors'
import { Spin } from 'antd';
import { AllGoodsList, GoodsPageLoading } from '../../../store/atoms';


const GoodsPage = () => {

    const [goodsInfo, setSelectedGoods] = useRecoilState(SeckillingGoodsInfo)
    const [allGoodsList,setAllGoods] = useRecoilState(AllGoodsList)
    const goodsPageLoading = useRecoilValue(GoodsPageLoading)


    useEffect(() => {
        getSeckillingGoods()
    }, [])

    /**请求商品数据 */
    const getSeckillingGoods = async () => {
        try {
            let {data} = await service.get(`/api1/customer/getProduct`)
            // let {data} = await service.get(`/api/goods`)
            const goods = data.data;//goods才是真实数据,应该是个数组
            setSelectedGoods(goods[0])//这里应该是goods[0]
            setAllGoods(goods)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <div className="goods-banner">
                <div className="slogan"></div>
                <div className="circle"></div>
                <div className="computer"></div>
            </div>

            <div className='goods-page'>
                <header className='goods-purchase'>
                    <Spin spinning={goodsPageLoading}>
                        <GoodsPurchase />
                    </Spin>
                </header>
                <main className='goods-details'>
                    <GoodsIntroduction/>
                </main>
            </div>

        </>

    );
}

export default GoodsPage;

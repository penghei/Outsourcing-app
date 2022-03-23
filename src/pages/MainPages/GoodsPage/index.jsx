import React, { useEffect, useState } from 'react';
import GoodsPurchase from 'components/Goods/GoodsPurchase';
import GoodsIntroduction from 'components/Goods/GoodsDetail/GoodsIntroduction';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { SeckillingGoodsInfo } from '@/store/atoms.js'
import './index.scss'
import axios from 'axios';
import service from '@/myaxios/interceptors'
import GoodsRecommand from '../../../components/Goods/GoodsDetail/GoodsRecommand';
import { allGoodsListTestData } from '../../../response_data_example';
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
            // let {data} = await service.get(`/api2/getProduct`)
            let {data} = await service.get(`/api/goods`)
            console.log(data)
            const goods = data.data;//goods才是真实数据,应该是个数组
            setSelectedGoods(data)//这里应该是goods[0]
            // setAllGoods(goods)
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
                        <GoodsPurchase {...goodsInfo} />
                    </Spin>
                </header>
                <main className='goods-details'>
                    <GoodsIntroduction {...goodsInfo} />
                </main>
                <footer className='goods-recommand'>
                    <header>
                        看看其它
                    </header>
                    <GoodsRecommand recommandList={allGoodsList} />
                </footer>
            </div>

        </>

    );
}

export default GoodsPage;

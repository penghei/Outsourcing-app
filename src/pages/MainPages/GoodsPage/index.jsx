import React, { useEffect, useState } from 'react';
import GoodsPurchase from 'components/Goods/GoodsPurchase';
import GoodsIntroduction from 'components/Goods/GoodsDetail/GoodsIntroduction';
// import GoodsList from '../../../components/Goods/GoodsList';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { SeckillingGoodsInfo, AllGoodsList } from '@/store/atoms.js'
import './index.scss'
import axios from 'axios';
import service from '@/myaxios/interceptors'
import GoodsRecommand from '../../../components/Goods/GoodsDetail/GoodsRecommand';
import { allGoodsListTestData } from '../../../response_data_example';
import { Spin } from 'antd';
import { GoodsPageLoading } from '../../../store/atoms';


const GoodsPage = () => {

    const setTopGoodsList = useSetRecoilState(AllGoodsList)
    const [goodsInfo, setSelectedGoods] = useRecoilState(SeckillingGoodsInfo)
    const goodsPageLoading = useRecoilValue(GoodsPageLoading)


    useEffect(() => {
        getSeckillingGoods()
    }, [])

    /**请求商品数据,把其中的多个商品渲染成列表 */
    const getSeckillingGoods = async () => {
        try {
            // let responses = await service.get(`http://localhost:8000/glimmer-bank/platform/product/all`)
            let responses = await service.get(`/api/goods`)

            console.log(responses)
            const goods = responses.data;
            //这里请求到全部商品后把第一个作为当前选中的，并提交到atoms，因此GoodsPage就不需要再请求
            setSelectedGoods(goods)
            // setTopGoodsList(goods)
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
                    <GoodsRecommand recommandList={allGoodsListTestData} />
                </footer>
            </div>

        </>

    );
}

export default GoodsPage;

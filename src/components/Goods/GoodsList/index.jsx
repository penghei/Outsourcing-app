import { Card } from 'antd';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { SeckillingGoodsInfo } from 'store/atoms';
import { allGoodsListTestData } from '../../../response_data_example';
import './index.scss'

const GoodsListBlock = ({ productName }) => {
    /**检查当前是否为被选中的,把props的name和顶层状态的name对比,如果相同就是被选中了 */
    const selectedGoods = useRecoilValue(SeckillingGoodsInfo)

    const eltraStyles = selectedGoods.productName === productName ? {
        color: 'gray',
        backgroundColor: 'rgb(192, 192, 192)'
    } : {
        color: 'black'
    }

    return (
        <Card
            style={{ width: 300, height: 50, ...eltraStyles }}
            className="goods-list-block"
        >
            <p>{productName}</p>
        </Card>
    );
}


const GoodsList = () => {

    const [goodsList, setGoodsList] = useState(allGoodsListTestData)

    const setSelectedGoods = useSetRecoilState(SeckillingGoodsInfo)

    useEffect(() => {
        // getGoodsList()
    }, [])

    /**请求商品数据,把其中的多个商品渲染成列表 */
    const getGoodsList = async () => {
        const requests = []
        for (let i = 1; i < 5; i++) {
            requests.push(axios.get(`/api/glimmer-bank/platform/product/all?pageId=${i}`))
        }
        try {
            let responses = await Promise.all(requests)
            responses = responses.map(res => res.data)
            console.log(responses)
            const goods = responses.data;
            if (Array.isArray(goods)) setGoodsList(goods)
            //这里请求到全部商品后把第一个作为当前选中的，并提交到atoms，因此GoodsPage就不需要再请求
            setSelectedGoods(goods[0])
        } catch (err) {
            console.error(err)
        }
    }

    /**把选中的商品放到全局状态 */
    const handleSelectedGoods = (goods) => {
        setSelectedGoods(goods)
    }

    return (
        <div className='goods-list'>
            {goodsList.map((goods, index) => {
                return (
                    <div key={index} onClick={(e) => handleSelectedGoods(goods, e)}>
                        <GoodsListBlock productName={goods.productName} />
                    </div>
                )
            })}
        </div>
    )
}
export default GoodsList;
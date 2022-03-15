import { Card } from 'antd';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { SeckillingGoodsInfo } from 'store/atoms';
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

    const [goodsList, setGoodsList] = useState([
        {
            "productName": "glimmer", //产品名称
            "productImgUrl": "/glimmer/qwer.jpg", //产品图片地址
            "productDescription": "fqewt", //产品描述
            "startTime": "2022-04-01 12:00", //产品开始时间
            "endTime": "2022-04-03 12:00", //产品结束时间
            "num": 100, //产品数量
            "price": 100, //产品金额
            "attend": true, //该用户是否参加
            "pass": true //（参加后需要的参数）是否通过初筛
        },
        {
            "productName": "uestc", //产品名称
            "productImgUrl": "/uestc/asdqewt.png", //产品图片地址
            "productDescription": "qwert", //产品描述
            "startTime": "2021-02-02 12:00", //产品开始时间
            "endTime": "2021-04-01 12:00", //产品结束时间
            "num": 1000, //产品数量
            "price": 2000, //产品金额
            "attend": true, //该用户是否参加
            "pass": false //（参加后需要的参数）是否通过初筛
        },
        {
            "productName": "sssss", //产品名称
            "productImgUrl": "/uestc/asdq.png", //产品图片地址
            "productDescription": "qaaaa", //产品描述
            "startTime": "2022-02-02 12:00", //产品开始时间
            "endTime": "2022-04-01 12:00", //产品结束时间
            "num": 100, //产品数量
            "price": 20, //产品金额
            "attend": true, //该用户是否参加
            "pass": false //（参加后需要的参数）是否通过初筛
        },
        {
            "productName": "uec", //产品名称
            "productImgUrl": "/uestc/aswt.png", //产品图片地址
            "productDescription": "aaaa", //产品描述
            "startTime": "2021-02-02 12:00", //产品开始时间
            "endTime": "2021-04-01 12:00", //产品结束时间
            "num": 0, //产品数量
            "price": 200, //产品金额
            "attend": true, //该用户是否参加
            "pass": false //（参加后需要的参数）是否通过初筛
        }, {
            "productName": "uec", //产品名称
            "productImgUrl": "/uestc/aswt.png", //产品图片地址
            "productDescription": "aaaa", //产品描述
            "startTime": "2021-02-02 12:00", //产品开始时间
            "endTime": "2021-04-01 12:00", //产品结束时间
            "num": 0, //产品数量
            "price": 200, //产品金额
            "attend": true, //该用户是否参加
            "pass": false //（参加后需要的参数）是否通过初筛
        },
        {
            "productName": "uec", //产品名称
            "productImgUrl": "/uestc/aswt.png", //产品图片地址
            "productDescription": "aaaa", //产品描述
            "startTime": "2021-02-02 12:00", //产品开始时间
            "endTime": "2021-04-01 12:00", //产品结束时间
            "num": 0, //产品数量
            "price": 200, //产品金额
            "attend": true, //该用户是否参加
            "pass": false //（参加后需要的参数）是否通过初筛
        }


    ])

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
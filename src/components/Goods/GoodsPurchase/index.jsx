import React, { useState } from 'react';
import { Button, Card, Image, InputNumber } from 'antd';
import './index.scss'
import { useRecoilValue } from 'recoil';
import { SeckillingGoodsInfo } from '@/store/atoms.js'

/**商品图片及购买组件 */
const GoodsPurchase = () => {
    const goodsInfo = useRecoilValue(SeckillingGoodsInfo)
    const [ifCanBuy, setIfCanBuy] = useState(false)
    const [ifOnTime, setIfOnTime] = useState(false)

    const timeFormat = (...times) => {
        // let resTime = [];
        // const [startTimeArr, endTimeArr] = times.map(time => time.split('/').slice(1))
        // for (let key in startTimeArr) {
        //     let time = (+endTimeArr[key]) - (+startTimeArr[key])
        //     if (time < 0 && +key === 2) {
        //         time += 24;
        //     } else if (time < 0 && +key === 3) {
        //         time += 60;
        //     }
        //     resTime.push(time)
        // }
        // return `${resTime[0]}月${resTime[1]}天${resTime[2]}小时${resTime[3]}分`
        console.log(times)
        // const [start, end] = times.map(time => time.replaceAll('-', '/'))
        // const startTime = new Date(start)
        // const endTime = new Date(end)
        // const lefttime = parseInt((endTime.getTime() - startTime.getTime()) / 1000);
        // let d = parseInt(lefttime / (24 * 60 * 60))
        // let h = parseInt(lefttime / (60 * 60) % 24);
        // let m = parseInt(lefttime / 60 % 60);
        // let s = parseInt(lefttime % 60);
        // d = addZero(d)
        // h = addZero(h);
        // m = addZero(m);
        // s = addZero(s);

        // return `活动倒计时  ${d}天 ${h} 时 ${m} 分 ${s} 秒`;
    }

    const handleAmountChange = (value) => {

    }

    return (
        <div className='goods-purchase-info'>
            <aside className='goods-img'>
                <Image src={goodsInfo.pic} alt={goodsInfo.name} />
            </aside>
            <main className='goods-buy'>
                <p className='goods-price-number'>￥{goodsInfo.price}</p>
                <p className='goods-name'>{goodsInfo.name}</p>
                <main className='goods-amount'>
                    <p>剩余数量：{goodsInfo.amount}</p>
                    <div><InputNumber min={1} defaultValue={1} onChange={handleAmountChange} size='large' /></div>
                </main>
                <p className='goods-time-title'>
                    {
                        ifOnTime
                            ? `秒杀时间还剩:`
                            : `距离开始时间还有:`
                    }
                </p>
                <p className='goods-time'>{/*timeFormat(goodsInfo.startTime, goodsInfo.endTime)*/}{'1 2 3 4 5'}</p>
                <footer className='goods-buy-button'>
                    {
                        ifCanBuy
                            ? (
                                ifOnTime
                                    ? <Button type='round' size='large'>立即抢购</Button>
                                    : <Button type='round' size='large' disabled>时间未到</Button>
                            )
                            : <Button type='round' size='large'>没有权限</Button>
                    }

                </footer>
            </main>
        </div>
    );
}

export default GoodsPurchase;

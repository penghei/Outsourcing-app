import React, { useState } from 'react';
import { Button, Card, Image, InputNumber } from 'antd';
import './index.scss'

/**商品图片及购买组件 */
const GoodsPurchase = ({ goodsInfo }) => {

    const [nowTime, setTime] = useState([0, 0, 0, 0])
    const [ifCanBuy, setIfCanBuy] = useState(false)


    const timeFormat = (...times) => {
        let resTime = [];
        const [startTimeArr, endTimeArr] = times.map(time => time.split('/').slice(1))
        for (let key in startTimeArr) {
            let time = (+endTimeArr[key]) - (+startTimeArr[key])
            if (time < 0 && +key === 2) {
                time += 24;
            } else if (time < 0 && +key === 3) {
                time += 60;
            }
            resTime.push(time)
        }
        return `${resTime[0]}月${resTime[1]}天${resTime[2]}小时${resTime[3]}分`
    }

    const handleAmountChange = (value) => {

    }

    return (
        <div className='goods-purchase-info'>
            <aside className='goods-img'>
                <Image src={goodsInfo.pic} alt={goodsInfo.name} />
            </aside>
            <main className='goods-buy'>
                <p className='goods-price-number'>{goodsInfo.price}</p>
                <p className='goods-name'>{goodsInfo.name}</p>
                <main className='goods-amount'>
                    <p>剩余数量：{goodsInfo.amount}</p>
                    <div><InputNumber min={1} defaultValue={1} onChange={handleAmountChange} size='large' /></div>
                </main>
                <p className='goods-time-title'>
                    {
                        ifCanBuy
                            ? `秒杀时间还剩:`
                            : `距离开始时间还有:`
                    }
                </p>
                <p className='goods-time'>{timeFormat(goodsInfo.startTime, goodsInfo.endTime)}</p>
                <footer className='goods-buy-button'>
                    {
                        ifCanBuy
                            ? <Button type='round' size='large'>立即抢购</Button>
                            : <Button type='round' size='large' disabled>时间未到</Button>
                    }

                </footer>
            </main>
        </div>
    );
}

export default GoodsPurchase;

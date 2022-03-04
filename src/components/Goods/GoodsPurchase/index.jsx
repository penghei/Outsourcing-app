import React, { useEffect, useState } from 'react';
import { Button, Image, InputNumber } from 'antd';
import './index.scss'
import Countdown from './Countdown';

/**商品图片及购买组件 */
const GoodsPurchase = (goodsInfo) => {
    const [ifCanBuy, setIfCanBuy] = useState(false)

    const handleAmountChange = (value) => {

    }

    return (
        <div className='goods-purchase-info'>
            <aside className='goods-img'>
                <Image width={300} src={/*goodsInfo.pic*/'https://file.ituring.com.cn/LargeCover/220221aede71623dcf92'} alt={goodsInfo.name} />
            </aside>
            <main className='goods-buy'>
                <p className='goods-price-number'>￥{goodsInfo.price}</p>
                <p className='goods-name'>{goodsInfo.name}</p>
                <main className='goods-amount'>
                    <p>剩余数量：{goodsInfo.amount}</p>
                    <div><InputNumber min={1} defaultValue={1} onChange={handleAmountChange} size='large' /></div>
                </main>
                <Countdown 
                  startTime={goodsInfo.startTime}
                  endTime={goodsInfo.endTime}
                  ifCanBuy={ifCanBuy}
                />
            </main>
        </div>
    );
}

export default GoodsPurchase;

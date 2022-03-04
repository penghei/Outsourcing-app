import React, { useEffect, useState } from 'react';
import { Button, Image, InputNumber } from 'antd';
import './index.scss'
import Countdown from './Countdown';

/**商品图片及购买组件 */
const GoodsPurchase = ({
    productName,
    productImgUrl,
    productDescription,
    startTime,
    endTime,
    num,
    price,
    attend,
    pass
}) => {
    const [ifCanBuy, setIfCanBuy] = useState(false)

    const handleAmountChange = (value) => {

    }

    return (
        <div className='goods-purchase-info'>
            <aside className='goods-img'>
                <Image width={300} src={productImgUrl} alt={productName} />
            </aside>
            <main className='goods-buy'>
                <p className='goods-price-number'>￥{price}</p>
                <p className='goods-name'>{productName}</p>
                <main className='goods-amount'>
                    <p>剩余数量：{num}</p>
                    <div><InputNumber min={1} defaultValue={1} onChange={handleAmountChange} size='large' /></div>
                </main>
                <Countdown
                    startTime={startTime}
                    endTime={endTime}
                    ifCanBuy={attend && pass}
                />
            </main>
        </div>
    );
}

export default GoodsPurchase;

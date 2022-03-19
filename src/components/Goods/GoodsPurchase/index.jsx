import React, { useEffect, useState } from 'react';
import { Button, Image, InputNumber, message } from 'antd';
import './index.scss'
import Countdown from './Countdown';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { PurchaseGoods, SeckillingGoodsInfo, UserInformation, OrderInformation } from 'store/atoms';
import service from '@/myaxios/interceptors.js'
import { withRouter } from 'react-router-dom';

/**商品图片及购买组件 */
const GoodsPurchase = ({
    productName,
    productImgUrl,
    startTime,
    endTime,
    num,
    price,
    attend,
    pass,
    history
}) => {

    const [ifOnTime, setIfOnTime] = useState('before')
    const [ifCanBuy, setIfCanBuy] = useState(true)

    const selectedGoods = useRecoilValue(SeckillingGoodsInfo)
    const setPurchaseGoods = useSetRecoilState(PurchaseGoods)
    const userInfo = useRecoilValue(UserInformation)
    const setOrderInfo = useSetRecoilState(OrderInformation)

    const onTimeBtn = {
        before: (<Button type='round' size='large' disabled>时间未到</Button>),
        // now: (<Button type='round' size='large'>立即抢购</Button>),
        after: (<Button type='round' size='large' disabled>活动已过期</Button>),
        error: (<Button type='round' size='large' disabled>暂不能购买</Button>)
    }

    
    const handleApply = () => {

    }

    const getIfOnTime = (ifontime) => {
        setIfOnTime(ifontime)
    }
    /**点击确认购买 */
    const handlePurchase = async () => {
        setPurchaseGoods(selectedGoods)
        setOrderInfo(selectedGoods)
        history.push({
            pathname: '/home/confirm'
        })

    }

    // useEffect(async () => {
    //     const res = await service.get(`glimmer-bank/platform/product/admit?productId=${2}&userId=${userInfo.userId}`)
    //     const { data,success } = res.data;
    //     success && setIfCanBuy(data)
    // }, [])

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
                    {/* <div><InputNumber min={1} defaultValue={1} onChange={handleAmountChange} size='large' /></div> */}
                </main>
                <Countdown
                    startTime={startTime}
                    endTime={endTime}
                    getIfOnTime={getIfOnTime}
                />
                <footer className='goods-buy-button'>
                    {ifCanBuy
                        ? (
                            Object.prototype.hasOwnProperty.call(onTimeBtn, ifOnTime)
                                ? onTimeBtn[ifOnTime]
                                : <Button type='round' size='large' onClick={handlePurchase}>立即抢购</Button>
                        )
                        : (
                            <div className='noapply-block'>
                                <Button type='round' size='large' disabled>没有权限不能购买</Button>
                                <Button type='round' size='large' onClick={handleApply}>申请权限</Button>
                            </div>
                        )
                    }
                </footer>
            </main>
        </div>
    );
}

export default withRouter(GoodsPurchase);

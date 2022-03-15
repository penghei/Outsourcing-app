import { Button, Divider, Modal, message } from 'antd';
import React from 'react';
import { withRouter } from 'react-router-dom';
import service from '@/myaxios/interceptors.js'
import './index.scss'
import { useSetRecoilState } from 'recoil';
import { TradeInformation } from '../../../store/atoms';


const ConfirmGoodsDetail = ({ goodsInfo, history }) => {

    const setTradeInfo = useSetRecoilState(TradeInformation)

    const filterDetailObj = {
        name: goodsInfo.productName,
        price: goodsInfo.price,
        amount: goodsInfo.amount,
        total: goodsInfo.totalPrice
    }

    const propsDictonary = {
        name: '商品名称',
        price: '单价',
        amount: '购买数量',
        total: '总计'
    }

    const handleClickBtn = async (e) => {
        console.log(e)
        if (e.target.innerText === '我再看看') {
            Modal.confirm({
                title: '确定返回吗?',
                content: '返回后之前的秒杀记录将不会保留',
                okText: '确定',
                cancelText: '取消',
                onOk() {
                    history.push({ pathname: '/home/goods' })
                },
            })
        } else {
            // const res = await service(`/glimmer-bank/platform/product/kill?productId=${2}&userId=${userInfo.userId}`)
            const res = await service('/api/trade')
            const { success, data: tradeInfo } = res.data;
            console.log(tradeInfo)
            if (success) {
                setTradeInfo(tradeInfo)
                message.success('购买成功！')
                setTimeout(() => {
                    history.push({
                        pathname:'/home'
                    })
                }, 2000);
            } else {
                message.error('购买失败')
            }
        }
    }

    return (
        <div className='comfirm-goods-detail'>
            <header className='title'>
                <p>结算</p>
            </header>
            <Divider />
            <main className='main'>
                {
                    Object.entries(filterDetailObj).map((data, index) => {
                        return (
                            <div key={index} className="list-block">
                                <p>{propsDictonary[data[0]]}</p>
                                <p>{data[1]}</p>
                            </div>
                        )
                    })
                }
                <Divider></Divider>
                <footer>
                    <p>合计</p>
                    <p>{goodsInfo.totalPrice}</p>
                </footer>
            </main>
            <footer className='confirm-btn' onClick={handleClickBtn}>
                <Button id='confirm' type='primary' shape='round'>确认购买</Button>
                <Button id='back' shape='round'>我再看看</Button>
            </footer>
        </div>
    );
}

export default withRouter(ConfirmGoodsDetail);

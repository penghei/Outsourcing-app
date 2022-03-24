import { Button, Divider, Modal, message, Spin } from 'antd';
import React, { useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import service from '@/myaxios/interceptors.js'
import './index.scss'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { SeckillingGoodsInfo } from '../../../store/atoms';


const ConfirmGoodsDetail = ({ history }) => {

    const goodsInfo = useRecoilValue(SeckillingGoodsInfo)
    const [isLoading, setIsLoading] = useState(false)
    const saleUrl = useRef('')

    const filterDetailObj = {
        name: goodsInfo.productName,
        price: goodsInfo.price,
    }

    const propsDictonary = {
        name: '商品名称',
        price: '单价',
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
            try {
                setIsLoading(true)
                const res = await service(`/api2/product/sale/url`)
                // const res = await service('/api/trade')
                const { success, data: url } = res.data;
                console.log(url)
                if (!url) {
                    message.error('链接设置错误')
                    return;
                }

                if (success) {
                    saleUrl.current = url
                } else {
                    message.error(`当前活动不在秒杀时间`)
                }

                const { data } = await service.post(`/api2/customer/product/kill/${saleUrl.current}?productId=${goodsInfo.productId}`)
                setIsLoading(false)
                console.log(data)
                if (data.success) {
                    message.success('购买成功！')
                    setTimeout(() => {
                        history.push({
                            pathname: '/home'
                        })
                    }, 2000);
                } else {
                    message.error(`购买失败,${data.message}`)
                }
            } catch (err) {
                console.log(err)
            } finally {
                message.error('未知错误')
                setIsLoading(false)
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
                    <p>{goodsInfo.price}</p>
                </footer>
            </main>
            <Spin spinning={isLoading}>
                <footer className='confirm-btn' onClick={handleClickBtn}>

                    <Button id='confirm' type='primary' shape='round'>确认购买</Button>

                    <Button id='back' shape='round'>我再看看</Button>
                </footer>
            </Spin>
        </div>
    );
}

export default withRouter(ConfirmGoodsDetail);

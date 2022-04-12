import { Button, Divider, Modal, message, Spin, Result } from 'antd';
import React, { useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import service from '@/myaxios/interceptors.js'
import './index.scss'
import { useRecoilValue } from 'recoil';
import { SeckillingGoodsInfo } from '../../../store/atoms';


const ConfirmGoodsPurchase = ({ history }) => {

    const {productName,productId,price} = useRecoilValue(SeckillingGoodsInfo)
    const [isLoading, setIsLoading] = useState(false)
    const [modalVisible, setModal] = useState(false)
    const saleUrl = useRef('')

    const filterDetailObj = {
        name: productName,
        price: price,
        bankCardNum: '6217004160025684871'
    }

    const propsDictonary = {
        name: '商品名称',
        price: '单价',
        bankCardNum: '支付银行卡号',

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
                const res = await service.get(`/api1/customer/product/sale/url?productId=${productId}`)
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
                    return
                }

                const { data } = await service.post(`/api1/customer/product/kill/${saleUrl.current}?productId=${productId}`)
                setIsLoading(false)
                console.log(data)
                if (data.success) {
                    message.success('购买成功！')
                    setTimeout(() => {
                        setModal(true)
                    }, 2000);
                } else {
                    message.error(`购买失败，可能是当前购买人数过多，请稍后再试一下`)
                }
            } catch (err) {
                console.log(err)
                message.error('购买请求失败，请稍后再试')
            } finally {
                // setModal(true)
                setIsLoading(false)
            }

        }
    }

    return (
        <div className='comfirm-goods-purchase'>
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
                    <p>{price}</p>
                </footer>
            </main>
            <Spin spinning={isLoading}>
                <footer className='confirm-btn' onClick={handleClickBtn}>

                    <Button id='confirm' type='primary' shape='round' size='large'>确认购买</Button>

                    <Button id='back' shape='round' size='large'>我再看看</Button>
                </footer>
            </Spin>
            <Modal
                title="支付成功"
                visible={modalVisible}
                footer={null}
            >
                <Result
                    status="success"
                    title="您的购买已经成功!"
                    subTitle="如果当前人数过多，可能需要几秒的时间才会同步到您的账户，请您耐心等待"
                    extra={[
                        <Button type="primary" key="console" onClick={() => {
                            setModal(false)
                            history.push({
                                pathname: '/home'
                            })
                           
                        }}>
                            返回主页
                        </Button>
                    ]}
                />
            </Modal>
        </div>
    );
}

export default withRouter(ConfirmGoodsPurchase);

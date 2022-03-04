import { Button, Divider, Modal } from 'antd';
import React from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss'


const ConfirmGoodsDetail = ({ goodsInfo, history }) => {

    const propsDictonary = {
        name: '商品名称',
        price: '单价',
        amount: '购买数量',
        discount: '折扣',
        total: '总计'
    }
    const filterDetailList = () => {
        return (Object.entries(goodsInfo)).slice(1, 4)
    }

    const handleClickBtn = (e) => {
        console.log(e)
        if (e.target.innerText === '我再看看') {
            Modal.confirm({
                title: '确定返回吗?',
                content: '返回后之前的秒杀记录将不会保留',
                okText:'确定',
                cancelText:'取消',
                onOk() {
                    history.push({pathname:'/home/goods'})
                },
            })
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
                    filterDetailList().map((data, index) => {
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
                    <p>{ }</p>
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

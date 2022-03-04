import React from 'react';
import { Table, Tag, Space } from 'antd';
import { useRecoilValue } from 'recoil';
import { SeckillingGoodsInfo } from '@/store/atoms.js'
import './index.scss'

const ConfirmGoodsTable = ({ goodsInfo }) => {
    const { pic, name, price } = goodsInfo;
    const columns = [
        {
            title: '产品图片',
            dataIndex: 'goodsPic',
            key: 'goodsPic',
            render: pic => <img src={pic} alt='wrong' className='goods-img' />
        },
        {
            title: '产品名称',
            dataIndex: 'goodsName',
            key: 'goodsName',
        },
        {
            title: '产品单价',
            dataIndex: 'goodsPrice',
            key: 'goodsPrice',
        },
        {
            title: '购买数量',
            key: 'goodsAmount',
            dataIndex: 'goodsAmount',
        },
        {
            title: '总计',
            key: 'total',
            dataIndex: 'total',
        },
    ];

    const data = [{
        goodsPic: pic,
        goodsName: name,
        goodsPrice: price,
        goodsAmount: 100,
        total: 100
    }]

    return (
        <div className='confirm-goods-tabel'>
            <header className='table-header'>
                <p>秒杀确认</p>
            </header>
            <Table className='main-table' columns={columns} dataSource={data} pagination={false} />
        </div>
    );
}

export default ConfirmGoodsTable;

import React from 'react';
import { Table, Tag, Space } from 'antd';
import uuid from 'uuidjs'
import './index.scss'
// import { useRecoilValue } from 'recoil';
// import { SeckillingGoodsInfo, GoodsPageLoading, AllGoodsList } from 'store/atoms';


const ConfirmGoodsTable = ({ goodsInfo }) => {
    const { productName, price } = goodsInfo
    console.log(goodsInfo)
    const columns = [
        {
            title: '产品图片',
            dataIndex: 'goodsPic',
            key: 'goodsPic',
            render: pic => <img src={pic} alt='wrong' className='goods-img' />
        },
        {
            title: '产品名称',
            dataIndex: 'productName',
            key: 'productName',
        },
        {
            title: '产品单价',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: '总计',
            key: 'price',
            dataIndex: 'price',
        },
    ];

    const data = [{
        goodsPic: '',
        productName,
        price,
        key: uuid.generate()
    }]

    return (
        <div className='confirm-goods-tabel'>
            <header className='table-header'>
                <p>秒杀确认</p>
            </header>
            <Table className='main-table' columns={columns} dataSource={data} pagination={false} key={data.key} />
        </div>
    );
}

export default ConfirmGoodsTable;

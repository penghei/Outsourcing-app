import React from 'react';
import { Table, Tag, Space } from 'antd';
import { useRecoilValue } from 'recoil';
import { SeckillingGoodsInfo } from '@/store/atoms.js'

const ConfirmGoodsTable = () => {
    const {pic,name,price} = useRecoilValue(SeckillingGoodsInfo)
    const columns = [
        {
            title: '产品图片',
            dataIndex: 'goodsPic',
            key: 'goodsPic',
            render:pic=><img src={pic} alt='wrong' />
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
        goodsPic:pic,
        goodsName:name,
        goodsPrice:price,
        goodsAmount:100,
        total:100
    }]

    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={false} />
        </div>
    );
}

export default ConfirmGoodsTable;

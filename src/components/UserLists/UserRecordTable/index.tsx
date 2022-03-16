import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import service from '@/hooks/interceptors';
import uuid from 'uuidjs';
import './index.less';
import { TradeRecordType } from '@/types';

interface IProps {}

const MAX_PAGE = 10;
const UserRecordTable: React.FC<IProps> = (props) => {
  const [tradeRecordData, setRecordData] = useState<TradeRecordType[]>([]);
  const columns = [
    {
      title: '交易记录',
      dataIndex: 'tradeId',
    },
    {
      title: '用户id',
      dataIndex: 'tradeUserId',
    },
    {
      title: '交易金额',
      dataIndex: 'tradeMoney',
    },
    {
      title: '活动id',
      dataIndex: 'activityId',
    },
    {
      title: '交易时间',
      dataIndex: 'tradeTime',
    },
    {
      title: '交易状态',
      dataIndex: 'tradeStatus',
      filters: [
        {
          text: '已完成',
          value: '已完成',
        },
        {
          text: '未完成',
          value: '未完成',
        },
        {
          text: '暂无数据',
          value: '暂无数据',
        },
      ],
      onFilter: (value, record) => record.isFilter === +value,
    },
  ];

  const data = [
    {
      tradeId: 124121, //交易记录
      tradeUserId: 2214, //用户ID
      tradeMoney: 100, //交易金额
      activityId: 124124, //活动ID
      tradeTime: '23-1-21 下午12:12', //交易时间
    },
  ];

  const getListData = async () => {
    //   const requests = []
    //   for(let i=1;i<=MAX_PAGE;i++){
    //     requests.push(await service.get(`/glimmer-bank/platform/product/records?pageId=${i}`))
    //   }
    //   try{
    //     let responses = await Promise.all(requests);
    //     let resDatas = responses.map((res:any)=>res.data.data)

    //   }catch(err){
    //       console.error(err)
    //   }
    filterData(data);
    setRecordData(data);
  };
  const filterData = (datas: TradeRecordType[]) => {
    datas.forEach((data) => {
      data.tradeStatus = data.tradeStatus ? '已完成' : '暂无数据';
      (data as any).key = uuid.generate();
    });
  };

  const onChange = (e: any) => {
    console.log(e);
  };

  useEffect(() => {
    getListData();
  }, []);
  return (
    <Table
      columns={columns}
      dataSource={tradeRecordData}
      onChange={onChange}
      style={{ flex: 1 }}
    />
  );
};
export default UserRecordTable;

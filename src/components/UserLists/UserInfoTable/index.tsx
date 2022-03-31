import React, { useEffect, useState } from 'react';
import { Table, message } from 'antd';
import service from '@/hooks/interceptors';

interface IProps {}
const index: React.FC<IProps> = (props) => {
  const columns = [
    {
      title: '用户ID',
      dataIndex: 'userId',
    },
    {
      title: '活动ID',
      dataIndex: 'activityId',
    },
    {
      title: '申请时间',
      dataIndex: 'recordTime',
    },
    {
      title: '初筛通过情况',
      dataIndex: 'isAdmitted',
      filters: [
        {
          text: '已通过',
          value: '已通过',
        },
        {
          text: '未通过',
          value: '未通过',
        },
      ],
      onFilter: (value, record) => record.isFilter === +value,
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await service.get<any, any>(
        `/api/manager/product/admit/records`,
      );
      console.log(res);
      const dataList = res.data.data
      if (res.data.success) {
        dataList.forEach((obj) => {
          obj.isAdmitted = obj.isAdmitted ? '已通过' : '未通过';
        });
        setData(dataList);
      } else {
        message.error('数据获取失败');
      }
    })();
  }, []);

  const onChange = (e: any) => {
    console.log(e);
  };
  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={onChange}
      style={{ flex: 1 }}
    />
  );
};
export default index;

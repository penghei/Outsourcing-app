import React from 'react';
import { Table } from 'antd';

interface IProps {}
const index: React.FC<IProps> = (props) => {
  const columns = [
    {
      title: '用户姓名',
      dataIndex: 'name',
    },
    {
      title: '用户性别',
      dataIndex: 'sex',
    },
    {
      title: '联系电话',
      dataIndex: 'telephone',
    },
    {
      title: '申请情况',
      dataIndex: 'isApply',
      filters: [
        {
          text: '已申请',
          value: '1',
        },
        {
          text: '未申请',
          value: '0',
        },
      ],
      onFilter: (value, record) => record.isApply === +value,
    },
    {
      title: '初筛通过情况',
      dataIndex: 'isFilter',
      filters: [
        {
          text: '已通过',
          value: '1',
        },
        {
          text: '未通过',
          value: '0',
        },
      ],
      onFilter: (value, record) => record.isFilter === +value,
    },
  ];

  const data = [
    {
      name: '张象', //用户姓名
      telephone: 19829931832, //用户电话号码
      sex: 1, //用户性别,0代表女,1代表男
      isApply: 1,
      isFilter: 0,
      key: '1',
    },
    {
      name: 'aaa', //用户姓名
      telephone: 198, //用户电话号码
      sex: 0, //用户性别,0代表女,1代表男
      isApply: 1,
      isFilter: 1,
      key: '2',
    },
    {
      name: 'ccc', //用户姓名
      telephone: 1982992, //用户电话号码
      sex: 1, //用户性别,0代表女,1代表男
      isApply: 1,
      isFilter: 1,
      key: '3',
    },
    {
      name: 'zzx', //用户姓名
      telephone: 19931832, //用户电话号码
      sex: 1, //用户性别,0代表女,1代表男
      isApply: 0,
      isFilter: 0,
      key: '4',
    },
  ];
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

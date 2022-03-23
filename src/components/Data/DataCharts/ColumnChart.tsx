import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';
import './index.less'

interface IProps{
    title?:string;
}

const ColumnChart: React.FC<IProps> = ({ title = '网站成交量' }) => {
  const data = [
    {
      type: '23日',
      sales: 380,
    },
    {
      type: '24日',
      sales: 520,
    },
    {
      type: '25日',
      sales: 610,
    },
    {
      type: '26日',
      sales: 1450,
    },
    {
      type: '27日',
      sales: 480,
    },
    {
      type: '28日',
      sales: 380,
    },
    {
      type: '29日',
      sales: 382,
    },
    {
      type: '30日',
      sales: 380,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: '日期',
      },
      sales: {
        alias: '成交量',
      },
    },
  };
  return (
    <div className="chart column-chart">
        <header className="title">{title}</header>
      <Column {...config} />
    </div>
  );
};

export default ColumnChart;

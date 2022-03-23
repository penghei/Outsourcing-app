import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';
import './index.less';

interface IProps {
  title?: string;
}

const PieChart: React.FC<IProps> = ({ title = '网站访问时间' }) => {
  const data = [
    {
      type: '14:00-18:00',
      value: 27,
    },
    {
      type: '18:00-22:00',
      value: 25,
    },
    {
      type: '22:00-02:00',
      value: 18,
    },
    {
      type: '06:00-10:00',
      value: 15,
    },
    {
      type: '10:00-14:00',
      value: 10,
    },
    {
      type: '02:00-06:00',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };
  return (
    <div className="chart pie-chart">
      <header className="title">{title}</header>
      <Pie {...config} />
    </div>
  );
};

export default PieChart;

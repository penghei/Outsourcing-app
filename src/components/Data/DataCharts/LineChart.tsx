import React from 'react';
import { Line } from '@ant-design/charts';
import './index.less';

interface IProps {
  title?: string;
}

const LineChart: React.FC<IProps> = ({ title = '网站点击量' }) => {
  const data = [
    { day: '23日', value: 1200 },
    { day: '24日', value: 2200 },
    { day: '25日', value: 2757 },
    { day: '26日', value: 1332 },
    { day: '27日', value: 980 },
    { day: '28日', value: 1527 },
    { day: '29日', value: 880 },
    { day: '30日', value: 991 },
    { day: '31日', value: 1803 },
  ];

  const config = {
    data,
    xField: 'day',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
    meta: {
      day: {
        alias: '日期',
      },
      value: {
        alias: '点击量',
      },
    },
  };
  return (
    <div className="chart line-chart">
      <header className="title">{title}</header>
      <Line {...config} />
    </div>
  );
};

export default LineChart;

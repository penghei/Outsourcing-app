import React from 'react';
import { Line } from '@ant-design/charts';
import './index.less'

interface IProps{
  title?:string;
}


const LineChart: React.FC<IProps> = ({ title = '折线图' }) => {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];

  const config = {
    data,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
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

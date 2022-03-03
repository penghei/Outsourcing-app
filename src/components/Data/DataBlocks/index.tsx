import React from 'react';
import ColumnChart from '../DataCharts/ColumnChart';
import LineChart from '../DataCharts/LineChart';
import PieChart from '../DataCharts/PieChart';
import './index.less';

interface IProps {}
const index: React.FC<IProps> = (props) => {
  return (
    <div className="charts-block">
      <LineChart />
      <PieChart />
      <ColumnChart />
    </div>
  );
};
export default index;

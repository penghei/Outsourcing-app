import React from 'react';
import { Spin } from 'antd';
import './Loading.less';

interface IProps {}
const Loading: React.FC<IProps> = (props) => {
  return (
    <div className="loading-page">
      <Spin>
        <div className="loading-inner">加载中......</div>
      </Spin>
    </div>
  );
};
export default Loading;

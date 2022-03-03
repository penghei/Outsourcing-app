import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import './index.less'
import { history } from 'umi';

const { Header, Footer, Sider, Content } = Layout;

interface IProps {
  text: string;
  route?: string;
}
const PageHeader: React.FC<IProps> = ({ text, route = '/' }) => {
  return (
    <Header className='page-header'>
      <Breadcrumb>
        <Breadcrumb.Item onClick={()=>{history.push('/')}}>
            Home
        </Breadcrumb.Item>
        <Breadcrumb.Item onClick={()=>{history.push(`${route}`)}}>
          {text}
        </Breadcrumb.Item>
      </Breadcrumb>
    </Header>
  );
};
export default PageHeader;

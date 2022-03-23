import React from 'react';
import { Layout, Breadcrumb ,Avatar} from 'antd';
import './index.less'
//@ts-ignore
import { history } from 'umi';
import AdminAvatar from './AdminAvatar';

const { Header} = Layout;

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

import React, { Component } from 'react';
import { Divider, Layout, Button, Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { history } from 'umi';
import DataBlocks from '@/components/Data/DataBlocks';
import PageHeader from '@/components/Layouts/PageHeader';

const { Header, Footer, Sider, Content } = Layout;

interface IProps {}
const DataDisplayPage: React.FC<IProps> = (props) => {
  return (
    <>
      <Layout className="datapage-main">
        <PageHeader text="数据展示" route="/data" />
        <Content className="datapage-content">
          <DataBlocks />
        </Content>
      </Layout>
    </>
  );
};
export default DataDisplayPage;

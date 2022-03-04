import React from 'react';
import { Layout } from 'antd';
import PageHeader from '@/components/Layouts/PageHeader';
import { routeType } from '@/types';
import './index.less';

const { Content } = Layout;

interface IProps {
  headerText: string;
  headerRoute?: routeType;
  className: string;
}
const PageContent: React.FC<IProps> = ({
  children,
  headerText,
  headerRoute = '/',
  className,
}) => {
  return (
    <>
      <Layout>
        <PageHeader text={headerText} route={headerRoute} />
        <Content className={`page-content ${className}`}>{children}</Content>
      </Layout>
    </>
  );
};
export default PageContent;

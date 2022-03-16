import { Layout } from 'antd';
import React from 'react';

const { Footer } = Layout;
interface IProps {}
const PageFooter: React.FC<IProps> = (props) => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      银行秒杀产品配置后台管理 @GlimmerStudio 2022
    </Footer>
  );
};
export default PageFooter;

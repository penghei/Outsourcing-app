/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
import './sass/antMotionStyle.scss';
import axios from 'axios';

import Nav2 from './Nav2';
import Banner0 from './Banner0';
import Feature4 from './Feature4';
import Content0 from './Content0';
import Footer1 from './Footer1';

import {
  Nav20DataSource,
  Banner01DataSource,
  // Feature40DataSource,
  Content00DataSource,
  Footer10DataSource,
} from './data.source';


let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Advertise extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
      features:{wrapper: { className: 'home-page-wrapper content6-wrapper' }},
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    let goodsInfo={};
      axios.get('/api/get/product/main/info')
      .then((response)=>{
        console.log(response);
        goodsInfo=response.data.data;
        const featuresData = {
          wrapper: { className: 'home-page-wrapper content6-wrapper' },
          OverPack: { className: 'home-page content6' },
          textWrapper: { className: 'content6-text', xs: 24, md: 10 },
          btn:{className:'ant-btn ant-btn-primary ant-btn-lg'},
          titleWrapper: {
            className: 'title-wrapper',
            children: [
              {
                name: 'title',
                children: goodsInfo.productName,
                className: 'title-h1',
              },
              {
                name: 'content',
                className: 'title-content',
                children: '一句话产品描述',
              },
              {
                name: 'content',
                className: 'some-info',
                children: goodsInfo.productDescription,
              },
            ],
          },
          img: {
            children: goodsInfo.productImgUrl,
            className: 'content6-img',
            xs: 24,
            md: 14,
          },
        };
        this.setState({features:featuresData});
      })
      .catch(function (error) {
        console.log('error',error);
      });
      
  }

  render() {
    const children = [  
      <Nav2
        id="Nav2_0"
        key="Nav2_0"
        dataSource={Nav20DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner0
        id="Banner0_1"
        key="Banner0_1"
        dataSource={Banner01DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature4
        id="Feature4_0"
        key="Feature4_0"
        dataSource={this.state.features}
        isMobile={this.state.isMobile}
      />,
      <Content0
        id="Content0_0"
        key="Content0_0"
        dataSource={Content00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer10DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}

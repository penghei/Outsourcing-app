import React from 'react';
export const Nav20DataSource = {
  isScrollLink: true,
  wrapper: { className: 'header2 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header2-logo',
    children: 'https://pic.imgdb.cn/item/6239c28627f86abb2afeccd5.png',
  },
  LinkMenu: {
    className: 'header2-menu',
    children: [
      {
        name: 'linkNav',
        to: '当前页面 ID 地址，参考如上',
        children: '登录/注册',
        className: 'menu-item',
      },
    ],
  },
  // mobileMenu: { className: 'header2-mobile-menu' },
};
export const Banner01DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: 'https://pic.imgdb.cn/item/6239aa8327f86abb2a81ea64.png',
  },
};

//这个是response_data_example中的产品数据,搬过来模拟一下
export const goodsInfo = {
  productName: "glimmer", //产品名称
  productImgUrl: "/glimmer/nmsl.jpg", //产品图片地址
  productDescription: "fucking", //产品描述
  startTime: "2022-04-01 12:00", //产品开始时间
  endTime: "2022-04-03 12:00", //产品结束时间
  num: 100, //产品数量
  price: 100, //产品金额
  attend: true, //该用户是否参加
  pass: true, //（参加后需要的参数）是否通过初筛
};

//因为这个模板的数据,是依据name来渲染(utils.js),为了保持原模板的结构所以需要把上面的数据填入到下面.,图片还没有填入

export const Feature40DataSource = {
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
    children: 'https://pic.imgdb.cn/item/6239b12827f86abb2aa1098b.png',
    className: 'content6-img',
    xs: 24,
    md: 14,
  },
};
//下面是第三栏的,不知道用不用,就保留模板原来的数据了
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '产品与服务' }],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '一站式业务接入',
            },
            { name: 'content', children: '支付、结算、核算接入产品效率翻四倍' },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '一站式事中风险监控',
            },
            {
              name: 'content',
              children: '在所有需求配置环节事前风险控制和质量控制能力',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '一站式数据运营',
            },
            {
              name: 'content',
              children: '沉淀产品接入效率和运营小二工作效率数据',
            },
          ],
        },
      },
    ],
  },
};
//------------------------------------------------------------------------------


export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:
            'https://pic.imgdb.cn/item/6239c40827f86abb2a084d4a.png',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: '湖南三湘银行',
            },
          ],
        },
      },

      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '关于' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'FAQ' },
            { href: '#', name: 'link1', children: '联系我们' },
          ],
        },
      },
     
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: " ©2022 by glimmer All Rights Reserved",
  }
};

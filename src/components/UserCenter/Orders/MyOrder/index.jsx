import React, { useState, useEffect } from 'react'
import imgUrl from '@/assest/money.png'
import {
  FieldTimeOutlined
} from '@ant-design/icons';
import './index.scss'
import { withRouter } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { AllGoodsList, SeckillingGoodsInfo } from '../../../../store/atoms';
import { message } from 'antd';

const MyOrder = ({ productName, price: tradeMoney, startTime: tradeTime, productDescription, history }) => {
  // function test(){
  //   setproductInfo({
  //     productName:"哇哈哈",
  //     tradeMoney:100,
  //     tradeTime:'23-1-21',
  //     productDescription:"高回报，高收益，短线稳定贷款产品，适用于家庭理财"
  //   });
  // }
  /*todo:是否实现点击跳转 

    实现了一点点，但是数据取的是商品列表不是购买列表，因为接口没给
    后期实现可以这样：
    1. 获取商品列表
    2. 在OrderForm请求交易记录，通过props下发到这个组件
    3. 用id比较，找出对应的商品
    4. 把商品数据放到SeckillingGoodsInfo里，选中商品
    5. 跳转路由
  */
  const allGoodsList = useRecoilValue(AllGoodsList)
  const setSelectedGoods = useSetRecoilState(SeckillingGoodsInfo)
  const routeToGoods = (e) => {
    const foundSelectedGoods = allGoodsList.find(goods => goods.productName === productName)//现在是name，后面有id了可以改成id
    if (!foundSelectedGoods) {
      message.error('未找到该商品')
      return
    }
    setSelectedGoods(foundSelectedGoods)
    history.push({
      pathname: '/home'
    })
  }
  return (
    <div className='order_box' onClick={routeToGoods}>
      <img src={imgUrl} alt="产品图片" />
      <div className="product_info">
        <h1>{productName}</h1>
        <p className='money'><strong>{`￥${tradeMoney}`}</strong></p>
        <strong>详细信息</strong>
        <p className='pro-description '>{productDescription}</p>
        <p className='text-primary'><FieldTimeOutlined />   {tradeTime}</p>
      </div>
    </div>
  )
}

export default withRouter(MyOrder)

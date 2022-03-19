import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import imgUrl from '@/assest/money.png'
import {
  FieldTimeOutlined
} from '@ant-design/icons';
import './index.scss'

export default function index(props) {
  
  
  const{productName,tradeMoney,tradeTime,productDescription}=props;
  console.log(props);
  // function test(){
  //   setproductInfo({
  //     productName:"哇哈哈",
  //     tradeMoney:100,
  //     tradeTime:'23-1-21',
  //     productDescription:"高回报，高收益，短线稳定贷款产品，适用于家庭理财"
  //   });
  // }
  /*todo:是否实现点击跳转 */
  return (
    <div className='order_box'>
      <img src={imgUrl} alt="产品图片" />
      <div className="product_info">
        <h1>{productName}</h1>
        <p className='money'><strong>{`￥${tradeMoney}`}</strong></p>
        <strong>详细信息</strong>
        <p className='pro-description '>{productDescription}</p>
        <p className='text-primary'><FieldTimeOutlined/>   {tradeTime}</p>
      </div>
    </div>
  )
}

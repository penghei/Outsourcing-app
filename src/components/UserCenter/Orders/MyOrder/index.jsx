import React from 'react'
import imgUrl from '@/assest/money.png'
import {
  FieldTimeOutlined
} from '@ant-design/icons';
import './index.scss'
import { withRouter } from 'react-router-dom';

const MyOrder = ({ productName, price: tradeMoney, startTime: tradeTime, productDescription, history }) => {

  return (
    <div className='order_box'>
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

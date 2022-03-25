import React from 'react'
import './index.scss'
import imgUrl from '@/assest/purse.png'

export default function MyPurse() {
  return (
    <div className='wrapper-purse'>
        {/* <img src={imgUrl} alt="我的钱袋" /> */}
        <div className="right-side">
            <div className="balance">我的账户余额</div>
            <div className="money-data">￥2500.06</div>
            <button className='recharge'>去充值</button>
        </div>
    </div>
  )
}

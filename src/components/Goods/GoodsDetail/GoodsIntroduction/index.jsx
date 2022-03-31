import { Card } from 'antd';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { SeckillingGoodsInfo } from '@/store/atoms.js'
import './index.scss'

/**商品详情 */
const GoodsIntroduction = () => {
    const { productDescription } = useRecoilValue(SeckillingGoodsInfo)
    console.dir("产品介绍"+productDescription); 
    return (
        <div className='goods-introduction'>
            <Card hoverable className='introduction-card'>
                <p>{productDescription}</p>
            </Card>
        </div>
    );
}

export default GoodsIntroduction;

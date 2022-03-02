import { Card } from 'antd';
import React from 'react';
import './index.scss'

/**商品详情 */
const GoodsIntroduction = ({goodsDetail}) => {
    return (
        <div className='goods-introduction'>
            <Card hoverable>
                <p>{goodsDetail}</p>
            </Card>
        </div>
    );
}

export default GoodsIntroduction;

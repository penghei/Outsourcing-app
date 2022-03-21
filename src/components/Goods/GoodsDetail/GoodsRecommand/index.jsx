import React from 'react';
import ShoppingCard from 'components/Shopping/ShoppingCard';
import './index.scss'

const GoodsRecommand = ({ recommandList }) => {

    return (
        <div className='goods-recommand-block'>
            {
                recommandList.map(item => {
                    return (
                        <ShoppingCard goodsProps={item} key={item.productId} />
                    )
                })
            }
        </div>
    );
}

export default GoodsRecommand;

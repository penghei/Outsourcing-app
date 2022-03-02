import React from 'react';
import ShoppingCard from 'components/Shopping/ShoppingCard';
import './index.scss'

const GoodsRecommand = ({ recommandList }) => {

    return (
        <div className='goods-recommand'>
            {
                recommandList.map(item => {
                    return (
                        <ShoppingCard goodsProps={item} key={item.id} />
                    )
                })
            }
        </div>
    );
}

export default GoodsRecommand;

import React from 'react';
import { Card, Radio } from 'antd';
import './index.scss'
import SelectorRadios from './SelectorRadios';

const Selector = () => {

    const category = {
        title: '商品分类',
        type: 'category',
        size: 'large',
        defaultValue: 'categoryA'
    }

    const price = {
        title: '价格区间',
        type: 'price',
        size: 'middle',
        defaultValue: 1
    }

    return (
        <>
            <Card className='selector-card'>
                <SelectorRadios {...category} />
                <br/>
                <SelectorRadios {...price} />
                
            </Card>
        </>
    );
}

export default Selector;

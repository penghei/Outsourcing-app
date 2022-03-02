import React from 'react';
import { Card, Input, Radio } from 'antd';
import './index.scss'
import SelectorRadios from './SelectorRadios';
import SearchInput from './SearchInput';

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
    const getInputValue = (value) =>{
        console.log(value,'parent')
    }

    return (
        <>
            <Card className='selector-card'>
                <SearchInput getInputValue={getInputValue}/>
                <br/>
                <SelectorRadios {...category} />
                <br/>
                <SelectorRadios {...price} />
            </Card>
        </>
    );
}

export default Selector;

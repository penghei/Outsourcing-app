import React from 'react';
import { Radio } from 'antd';

const SelectorRadios = ({ title, type, size = "middle", defaultValue }) => {


    const cateRadios = (
        <div className='selector-category'>
            <header>{title}</header>
            <main className='category-radios'>
                <Radio.Group defaultValue={defaultValue} size={size}>
                    <Radio.Button value="categoryA">分类A</Radio.Button>
                    <Radio.Button value="categoryB">分类B</Radio.Button>
                    <Radio.Button value="categoryC">分类C</Radio.Button>
                    <Radio.Button value="categoryD">分类D</Radio.Button>
                </Radio.Group>
            </main>
        </div>
    )

    const priceRadios = (
        <div className='selector-price'>
            <header>{title}</header>
            <main className='price-radios'>
                <Radio.Group name="radiogroup" defaultValue={defaultValue} size={size}>
                    <Radio value={1}>10~100</Radio>
                    <Radio value={2}>100~1000</Radio>
                    <Radio value={3}>1000~2000</Radio>
                    <Radio value={4}>{`>2000`}</Radio>
                </Radio.Group>
            </main>

        </div>
    )
    return (

        type === 'category'
            ? cateRadios
            : priceRadios
    );
}

export default SelectorRadios;

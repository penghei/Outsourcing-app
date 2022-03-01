import React, { useState } from 'react';
import ShoppingCard from '../ShoppingCard';
import './index.scss'

const ShoppingList = () => {

    const [shoppingsList, setShoppings] = useState([
        {
            pic: '#',
            title: 'aaa',
            id: "1"
        },
        {
            pic: '#',
            title: 'bbb',
            id: "2"
        },
        {
            pic: '#',
            title: 'ccc',
            id: "3"
        },
        {
            pic: '#',
            title: 'ddd',
            id: "4"
        },
        {
            pic: '#',
            title: 'ddd',
            id: "5"
        },

        {
            pic: '#',
            title: 'ddd',
            id: "6"
        },
        {
            pic: '#',
            title: 'ddd',
            id: "7"
        },
    ])

    return (
        <div className='shopping-list'>
            {
                shoppingsList.map(item =>
                    <ShoppingCard {...item} key={item.id} />
                )
            }
        </div>
    );
}

export default ShoppingList;

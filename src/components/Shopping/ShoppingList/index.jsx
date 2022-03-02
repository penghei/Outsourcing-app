import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { selectedGoodsInfo } from '@/store/atoms';
import ShoppingCard from '../ShoppingCard';
import './index.scss'
import { withRouter } from 'react-router-dom';

const ShoppingList = (props) => {

    const [shoppingsList, setShoppings] = useState([
        {
            pic: "#",
            name: "aaaaaaaaaaaaaaa",
            price: "12345",
            amount: "123",
            startTime: "2022/03/02/12/23",
            endTime: "2022/04/02/00/00",
            id: "001",
            details: "这是一个很好的理财产品,孩子吃了还要吃,敏感肌也能用,下次还会再买",
        },
        {
            pic: "#",
            name: "bbbbbb",
            price: "12345",
            amount: "123",
            startTime: "2022/03/02/12/23",
            endTime: "2022/04/02/00/00",
            id: "002",
            details: "这是一个很好的理财产品,孩子吃了还要吃,敏感肌也能用,下次还会再买",
        },
        {
            pic: "#",
            name: "ccccccc",
            price: "12345",
            amount: "123",
            startTime: "2022/03/02/12/23",
            endTime: "2022/04/02/00/00",
            id: "003",
            details: "这是一个很好的理财产品,孩子吃了还要吃,敏感肌也能用,下次还会再买",
        },
        {
            pic: "#",
            name: "ddddddd",
            price: "12345",
            amount: "123",
            startTime: "2022/03/02/12/23",
            endTime: "2022/04/02/00/00",
            id: "004",
            details: "这是一个很好的理财产品,孩子吃了还要吃,敏感肌也能用,下次还会再买",
        },
        {
            pic: "#",
            name: "eeeeeee",
            price: "12345",
            amount: "123",
            startTime: "2022/03/02/12/23",
            endTime: "2022/04/02/00/00",
            id: "005",
            details: "这是一个很好的理财产品,孩子吃了还要吃,敏感肌也能用,下次还会再买",
        },


    ])
    const setSelectedGoodsInfo = useSetRecoilState(selectedGoodsInfo)

    const routeToGoods = (item,e) => {
        console.log(item)
        setSelectedGoodsInfo(item)
        props.history.push({
            pathname: '/home/goods'
        })
    }

    return (
        <div className='shopping-list'>
            {
                shoppingsList.map(item =>
                    <div key={item.id} onClick={(e) => { routeToGoods(item,e) }}>
                        <ShoppingCard {...item} />
                    </div>

                )
            }
        </div>
    );
}

export default withRouter(ShoppingList);

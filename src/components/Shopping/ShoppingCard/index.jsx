import React, { useState } from 'react';
import { Card } from 'antd';
import './index.scss'


const ShoppingCard = ({ pic, name }) => {

    return (
        <>
            <Card
                hoverable
                cover={<img alt={name} src={pic} />}
                className="shopping-card"
            >
                <p>{name}</p>
            </Card>
        </>
    );
}

export default ShoppingCard;

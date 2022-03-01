import React, { useState } from 'react';
import { Card } from 'antd';
import './index.scss'


const ShoppingCard = ({ pic, title }) => {


    return (
        <>
            <Card
                hoverable
                cover={<img alt={title} src={pic} />}
                className="shopping-card"
            >
                <p>{title}</p>
            </Card>
        </>
    );
}

export default ShoppingCard;

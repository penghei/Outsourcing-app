import { Input } from 'antd';
import React, { useState } from 'react';
import './index.scss'

const ConfirmGoodsRemarks = () => {
    const [inputLen,setInputLen] = useState(0)

    const handleChangeRemarks = (e) => {
        let value = e.target.value;
        setInputLen(value.length)
    }
    return (
        <div className='confirm-remarks'>
            <header>
                <p>备注</p>
            </header>
            <textarea 
            className='text-area'
            placeholder='输入备注……' 
            onChange={handleChangeRemarks}
            maxLength="50"
            />
            <p className='input-length'>{inputLen}/50</p>
        </div>
    );
}

export default ConfirmGoodsRemarks;

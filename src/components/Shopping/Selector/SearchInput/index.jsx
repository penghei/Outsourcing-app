import React, { useRef } from 'react';
import { SearchOutlined } from '@ant-design/icons'
import './index.scss'

const SearchInput = ({getInputValue}) => {
    const myInput = useRef(null)
    const handleSearch = () => {
        let value = myInput.current.value;
        getInputValue(value)
    }
    return (
        <div className='search'>
            <input className='search-input' placeholder='请输入关键字...' ref={myInput} />
            <button className='search-btn' onClick={handleSearch}>
                <SearchOutlined />
            </button>
        </div>
    );
}

export default SearchInput;

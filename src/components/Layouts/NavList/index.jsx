import React from 'react';
import { Menu,Avatar, Image } from 'antd';
import './index.scss'
import { withRouter } from 'react-router-dom';

const NavList = (props) => {

    const handleClick = (e) => {
        console.log(e.key)
        props.history.push(e.key === 'home' ? {
            pathname:'/home'
        } : {
            pathname: `/home/${e.key}`
        })
    }

    return (
        <div className='menu'>
            <Menu onClick={handleClick} mode="horizontal" theme='light' className='nav-list'>
                <Menu.Item key="home">
                    主页
                </Menu.Item>
                <Menu.Item key="shopping">
                    商品
                </Menu.Item>
                <Menu.Item key="user" className='user-menu'>
                    <Avatar src="#" />
                </Menu.Item>
            </Menu>
        </div>
    );
}

export default withRouter(NavList);


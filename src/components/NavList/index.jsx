import React from 'react';
import { Menu } from 'antd';
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
        <>
            <Menu onClick={handleClick} mode="horizontal" theme='dark' className='nav-list'>
                <Menu.Item key="home">
                    Home
                </Menu.Item>
                <Menu.Item key="shopping">
                    shopping
                </Menu.Item>
                <Menu.Item key="user" className='user-menu'>
                    user
                </Menu.Item>
            </Menu>
        </>
    );
}

export default withRouter(NavList);


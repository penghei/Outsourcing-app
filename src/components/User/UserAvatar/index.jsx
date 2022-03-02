import { Avatar, Button, Divider, Popover } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss'

const UserAvatar = ({ userInfo }) => {
    const {avatarPic,userName,...otherProps} = userInfo;
    
    const handleRouteTo = (e) => {
        console.log(e.target.id)
    }
    const handleExitLogin = () => {

    }

    const userModal = (
        <div className='user-modal'>
            <header>{userName}</header>
            <Divider/>
            <main onClick={handleRouteTo}>
                <p id="user">个人主页</p>
                <p id="account">我的账户</p>
                <p id="order">我的订单</p>
                <p id="shoppingcar">购物车车</p>
            </main>
            <Divider/>
            <footer onClick={handleExitLogin}>退出登录</footer>
        </div>
    )
    return (
        <div className='user-avatar'>
            {
                userInfo.ifLogin
                    ? (
                        <Popover trigger="hover" content={userModal} placement="bottom">
                            <Avatar src={avatarPic} className='avatar-pic' />
                        </Popover>
                    )
                    : <Button shape='round' >登录/注册</Button>
            }
        </div>
    );
}

export default withRouter(UserAvatar);

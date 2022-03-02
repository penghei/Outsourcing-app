import React, { useEffect } from 'react';
import { Menu, } from 'antd';
import './index.scss'
import { withRouter } from 'react-router-dom';
import UserAvatar from '../../User/UserAvatar';
import { useRecoilState } from 'recoil';
import { UserInformation } from '@/store/atoms.js'

const NavList = (props) => {
    //获取和设置用户信息
    const [userInfo, setUserInfo] = useRecoilState(UserInformation)

    const handleClick = (e) => {
        if (e.key === 'home') return;
        props.history.push(e.key === 'login' ? {
            pathname: '/login'
        } : {
            pathname: `/home/${e.key}`
        })
    }
    //请求登录状态,结果返回后通过setUserInfo设置用户信息
    useEffect(() => {

    }, [])
    return (
        <div className='menu'>
            <Menu onClick={handleClick} mode="horizontal" theme='light' className='nav-list'>
                <Menu.Item key="goods">
                    主页
                </Menu.Item>
                <Menu.Item key="shopping">
                    其他秒杀商品
                </Menu.Item>
                <Menu.Item key={userInfo.ifLogin ? 'user' : 'login'} className='user-menu'>
                    <UserAvatar userInfo={userInfo} />
                </Menu.Item>
            </Menu>
        </div>
    );
}

export default withRouter(NavList);


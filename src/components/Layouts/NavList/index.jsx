import React, { useEffect } from 'react';
import { Menu, } from 'antd';
import './index.scss'
import { withRouter } from 'react-router-dom';
import UserAvatar from '../../User/UserAvatar';
import { useRecoilState, useRecoilValue } from 'recoil';
import { UserInformation, UserLoginState } from '@/store/atoms.js'
import service from '../../../myaxios/interceptors'

const NavList = (props) => {
    //获取和设置用户信息
    const [userInfo, setUserInfo] = useRecoilState(UserInformation)
    const isLogin = useRecoilValue(UserLoginState)

    const handleClick = (e) => {
        props.history.push(e.key === 'login' ? {
            pathname: '/login'
        } : {
            pathname: `/home/${e.key}`
        })
    }
    //请求登录状态
    useEffect(async() => {
        // const {data} = await service.get('/api2/customer/detail')
        // if(data.success){
        //     console.log(data.data)
        //     setUserInfo(data.data)
        // }
    }, [])
    return (
        <div className='menu'>
            <Menu onClick={handleClick} mode="horizontal" theme='light' className='nav-list'>
                <Menu.Item key="goods">
                    主页
                </Menu.Item>
                <Menu.Item key={isLogin ? 'user' : 'login'} className='user-menu'>
                    <UserAvatar userInfo={userInfo} isLogin={isLogin} />
                </Menu.Item>
            </Menu>
        </div>
    );
}

export default withRouter(NavList);


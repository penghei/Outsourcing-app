import React, { useEffect } from "react";
import { Avatar, Menu, message } from "antd";
import { withRouter } from "react-router-dom";
import UserAvatar from "./UserAvatar";
import { useRecoilState } from "recoil";
import { UserInformation, UserLoginState } from "@/store/atoms.js";
import service from "../../../myaxios/interceptors";
import Bank from '@/assest/bank.png'
import "./index.scss";

const NavList = ({ history }) => {
  //获取和设置用户信息
  const [userInfo, setUserInfo] = useRecoilState(UserInformation);
  const [isLogin, setIsLogin] = useRecoilState(UserLoginState);

  const handleClick = (e) => {
    const key = e.key;
    if (key === "goods") history.push({ pathname: "/home" });
    else history.push({ pathname: "/user" });
  };
  //请求登录状态
  useEffect(async () => {
    try {
      const { data } = await service.get(`/api1/customer/detail`);
      if (data.success) {
        const userInfo = data.data;
        console.log(userInfo);
        setUserInfo(userInfo);
      } else {
        message.error("获取用户信息失败");
        setIsLogin(false);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);
  return (
    <div className="menu">
      <Menu
        onClick={handleClick}
        mode="horizontal"
        theme="light"
        className="nav-list"
      >
        <Menu.Item key="goods">
          <Avatar src={Bank} />
        </Menu.Item>
        <Menu.Item key={isLogin ? "user" : "login"} className="user-menu">
          <UserAvatar userInfo={userInfo} isLogin={isLogin} />
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default withRouter(NavList);

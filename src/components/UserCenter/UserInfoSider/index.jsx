import React, { useEffect } from "react";
import { Route, withRouter, Link } from "react-router-dom";
import { Menu } from "antd";
import { Avatar, Image } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import {
  ContactsTwoTone,
  QuestionCircleTwoTone,
  SettingTwoTone,
  DollarTwoTone,
  EditTwoTone,
  AlertTwoTone,
  AccountBookTwoTone,
  CarryOutTwoTone,
} from "@ant-design/icons";
import "./index.scss";

const { SubMenu } = Menu;

const UserInfoSider = (props) => {
  const handleClick = (e) => {
    console.log(e.key);
    props.history.push({ pathname: `/user/${e.key}` });
  };
  // const handleClick = e => {
  //     console.log('click ', e);
  //   };

  return (
    <div className="sider_container">
      <Avatar
        className="potrait"
        src={
          <Image
            src="https://joeschmoe.io/api/v1/random"
            style={{ maxWidth: "180px", minWidth: "90px" }}
          />
        }
      />
      <main className="sider-menu">
        <Menu
          onClick={handleClick}
          style={{ minWidth: "145px" }}
          defaultSelectedKeys={["myorder"]}
          defaultOpenKeys={["myorder"]}
          mode="inline"
          className="user-sider"
        >
          <Menu.Item key="myorder" icon={<DollarTwoTone />}>
            订单中心
            {/* <Menu.ItemGroup key="g2" title="Item 2">
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                </Menu.ItemGroup> */}
          </Menu.Item>
          <Menu.Item key="userinfo" icon={<SettingTwoTone />}>
            个人设置
          </Menu.Item>
          <Menu.Item key="questions" icon={<QuestionCircleTwoTone />}>
            常见问题
          </Menu.Item>
          <Menu.Item key="aboutus" icon={<ContactsTwoTone />}>
            关于我们
          </Menu.Item>
        </Menu>
      </main>
    </div>
  );
};
export default withRouter(UserInfoSider);

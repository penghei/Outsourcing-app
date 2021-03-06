import React, { useState } from "react";
import { Form, Input, Button, Checkbox, message, Modal, Spin } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { UserLoginState } from "store/atoms";
import { setStorage } from "../../../../hooks/useStorage";
import "./index.scss";

const LoginForm = ({ history }) => {
  const [spinning, setSpinning] = useState(false);
  const setUserLoginState = useSetRecoilState(UserLoginState);
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    const { username, password } = values;
    try {
      setSpinning(true);
      const { data } = await axios.post("/api1/customer/login", {
        username,
        password,
      });
      console.log(data);
      if (data.success) {
        message.success("登录成功!");
        setStorage("jwt", data.data);
        history.push({
          pathname: "/home/goods",
        });
        setUserLoginState(true);
      } else {
        Modal.error({
          content: "用户名或密码错误",
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSpinning(false);
    }
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "请输入用户名",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="用户名"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "请输入密码",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密码"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住我</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="">
          忘记密码？
        </a>
      </Form.Item>

      <Form.Item>
        <Spin spinning={spinning}>
          <Button type="primary" htmlType="submit" className="login">
            登录
          </Button>
        </Spin>
      </Form.Item>
    </Form>
  );
};
export default withRouter(LoginForm);

import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';

import { AdminLoginResponseType, AdminLoginType } from '@/types';

import './index.less';
import axios, { AxiosResponse } from 'axios';
import { history } from 'umi';
import { setStorage } from '@/hooks/useStorage';
import { useSetRecoilState } from 'recoil';
import { loginState } from '@/atoms/atoms';

interface IProps {}
const LoginForm: React.FC<IProps> = (props) => {
  const setLoginState = useSetRecoilState(loginState);

  const onFinish = async (values: AdminLoginType) => {
    console.log(values);
    const res = await axios.post<
      AdminLoginType,
      AxiosResponse<AdminLoginResponseType>
    >('/api/manager/login', values);
    const { success, data: jwt } = res.data;
    if (success) {
      message.success('登录成功');

      setStorage('jwt', jwt);

      setLoginState({
        isLogin: true,
        info: {
          administerId: values.username,
          administerPassword: values.password,
        },
      });
      history.push('/main');
    } else {
      message.error('账号或密码错误');
      history.push('/main');
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('填写不符合约束', errorInfo);
  };

  return (
    <>
      <Form
        name="loginForm"
        className="login-form"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-btn"
            size="large"
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default LoginForm;

import React from 'react';
import { Form, Input, Button, Checkbox, message, Modal } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { UserLoginState } from 'store/atoms';
import { setStorage } from '../../../hooks/useStorage';


const LoginForm = ({ history }) => {

    const setUserLoginState = useSetRecoilState(UserLoginState)
    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        const { username, password } = values;

        // const { data } = await axios.post('/api2/customer/login', { username, password }, { headers: { 'Content-Type': 'application/json' } })
        // if (data.success) {
        //     message.success('登录成功!')
        //     setStorage(data.data)
        //     history.push({
        //         pathname: '/home/goods'
        //     })
        //     setUserLoginState(true)
        // } else {
        //     Modal.error({
        //         content: '用户名或密码错误'
        //     })
        // }

        history.push({
            pathname: '/home/goods'
        })
        setUserLoginState(true)

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
                        message: '请输入用户名',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: '请输入密码',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
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
                <Button type="primary" htmlType="submit" className="login" >
                    登录
                </Button>
            </Form.Item>
        </Form>
    );
};
export default withRouter(LoginForm);

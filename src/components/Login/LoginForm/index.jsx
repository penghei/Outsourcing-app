import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { UserLoginState } from 'store/atoms';


const LoginForm = ({ history }) => {

    const setUserLoginState = useSetRecoilState(UserLoginState)
    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        const {username,password} = values;
        
        // const res = await axios.post('/api/glimmer-bank/user/login',{username,password})
        

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
                        message: 'Please input your Username!',
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
                        message: 'Please input your Password!',
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
                    忘记密码
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

import React, { useState } from 'react';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import {
  Switch,
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  message,
} from 'antd';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
const { Option } = Select;

//地址选择框数据
const residences = [
  {
    value: 'sichuan',
    label: '四川',
    children: [
      {
        value: 'chengdu',
        label: '成都',
        children: [
          {
            value: 'chenghua',
            label: '成华区',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nanjing',
        label: '南京',
        children: [
          {
            value: 'zhonghuamen',
            label: '中华门',
          },
        ],
      },
    ],
  },
];

//布局
const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 18
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm = ({history}) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const finalValue = {
      ...values,
      liveRegion: values.liveRegion.join(' '),
      childBorn: values.childBorn || false,
      wedded: values.wedded || false,
      work: values.work || false
    }
    console.log('Received values of form: ', finalValue);
    // const res = axios.post(`/api/glimmer-bank/user/register`, finalValue)
    // const {success} = res.data;
    const success = true;
    if(success){
      message.success('注册成功!')
      setTimeout(() => {
        history.push({
          pathname:'/home'
        })
      }, 500);
    }
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >

      <Form.Item
        name="真实姓名"
        label="真实姓名"
        tooltip="请务必填写真实姓名"
        rules={[
          {
            required: true,
            message: 'Please input your nickname!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="liveRegion"
        label="现居住地"
        rules={[
          {
            type: 'array',
            required: true,
            message: '选择你的现居地',
          },
        ]}
      >
        <Cascader options={residences} />
      </Form.Item>

      <Form.Item
        name="id_number"
        label="身份证号码"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
      <Form.Item
        name="gender"
        label="性别"
        rules={[{ required: true, message: '请选择你的性别' }]}
      >
        <Select placeholder="选择你的性别">
          <Option value="male">男</Option>
          <Option value="female">女</Option>
          {/* <Option value="other">Other</Option> */}
        </Select>
      </Form.Item>
      <Form.Item
        name="phone"
        label="手机号码"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="password"
        label="密码"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="确认密码"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('两次密码输入不一致！'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="wedded"
        label="婚姻状态">
        <Switch checkedChildren="已婚" unCheckedChildren="未婚" defaultChecked={false} />
      </Form.Item>
      <Form.Item
        name="childBorn"
        label="子嗣状态">
        <Switch checkedChildren="已育" unCheckedChildren="未育" defaultChecked={false} />
      </Form.Item>
      <Form.Item
        name="work"
        label="工作情况">
        <Switch checkedChildren="就业" unCheckedChildren="待业" />
      </Form.Item>
      {/* <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          我已阅读 <a href="">需知</a>
        </Checkbox>
      </Form.Item> */}
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" className='register'>
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};

export default withRouter(RegistrationForm);


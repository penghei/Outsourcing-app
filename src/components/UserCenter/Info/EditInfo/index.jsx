import React, { useState } from 'react';
import { Switch } from 'antd';
// import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Select,

} from 'antd';
// const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

export default function index(Props) {

  const { userId, userName, userTelephone, userRegion, userIsWedding, userIsChildBorn, userIsWork, userSex } = Props.infoProps;
  const form = Props.form;
  // console.log(userName);
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  // const formating = (value, prevValue, prevValues) => {
  //   console.log(value, prevValue, prevValues);
  //   console.log("hahah");
  //   if (!prevValue) {
  //     prevValues.married = 1;
  //   } else {
  //     prevValues.married = prevValue ? 1 : 0;
  //   }
  // }
  return (
    <Form
      {...formItemLayout}
      form={form}
      onFinish={onFinish}
      initialValues={{
        userId: userId,
        realName: userName,
        phone: userTelephone,
        place: userRegion,
      }}
      scrollToFirstError
    >
      {/* <Form.Item
        name="userId"
        label="用户ID"
        hidden
      >
      </Form.Item> */}

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
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
      <Form.Item
        name="place"
        label="所在区域"
        rules={[
          {
            required: true,
            message: '请填写你的所在区域',
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
        name="married"
        label="婚姻状态" valuePropName="checked" >
        <Switch checkedChildren="已婚" unCheckedChildren="未婚" defaultChecked={userIsWedding ? true : false} />
      </Form.Item>
      <Form.Item
        name="child"
        label="子女情况" valuePropName="checked">
        <Switch checkedChildren="已育" unCheckedChildren="未育" defaultChecked={userIsChildBorn ? true : false} />
      </Form.Item>
      <Form.Item
        name="work"
        label="工作情况" valuePropName="checked">
        <Switch checkedChildren="就业" unCheckedChildren="待业" defaultChecked={userIsWork ? true : false} />
      </Form.Item>


    </Form>
  )
}

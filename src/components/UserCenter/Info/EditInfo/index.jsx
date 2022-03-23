import React, { useState } from 'react';
import { Switch } from 'antd';
// import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Select,
} from 'antd';
import service from '../../../../myaxios/interceptors'
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

  const { userId, name, telephone, liveRegion, wedded, childBorn, work, sex } = Props.infoProps;
  const form = Props.form;

  const onFinish = async (values) => {
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
        userId,
        name,
        telephone,
        liveRegion,
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
        name="telephone"
        label="手机号码"
        rules={[
          {
            required: true,
            message: '请输入要修改的手机号',
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
        name="identification"
        label="身份证号"
        rules={[
          {
            required: true,
            message: '请输入要修改的身份证号码',
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
        name="liveRegion"
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
        name="wedded"
        label="婚姻状态" valuePropName="checked" >
        <Switch checkedChildren="已婚" unCheckedChildren="未婚" defaultChecked={wedded ? true : false} />
      </Form.Item>
      <Form.Item
        name="childBorn"
        label="子女情况" valuePropName="checked">
        <Switch checkedChildren="已育" unCheckedChildren="未育" defaultChecked={childBorn ? true : false} />
      </Form.Item>
      <Form.Item
        name="work"
        label="工作情况" valuePropName="checked">
        <Switch checkedChildren="就业" unCheckedChildren="待业" defaultChecked={work ? true : false} />
      </Form.Item>


    </Form>
  )
}

import React from "react";
import "./index.scss";
import {
  Switch,
  Form,
  Input,
  Modal,
  Cascader,
  Select,
  Button,
  message,
} from "antd";
import axios from "axios";
import { withRouter } from "react-router-dom";
const { Option } = Select;

//地址选择框数据
const residences = [
  {
    value: "sichuan",
    label: "四川",
    children: [
      {
        value: "chengdu",
        label: "成都",
        children: [
          {
            value: "chenghua",
            label: "成华区",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "江苏",
    children: [
      {
        value: "nanjing",
        label: "南京",
        children: [
          {
            value: "zhonghuamen",
            label: "中华门",
          },
        ],
      },
    ],
  },
];

//布局
const formItemLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 20,
      offset: 0,
    },
    // sm: {
    //   span: 16,
    //   offset: 8,
    // },
  },
};

const RegistrationForm = () => {
  const [form] = Form.useForm();

  const useFormatForm = (values) => {
    for (let key in values) {
      if (!values[key]) values[key] = 0;
    }
    const finalValue = {
      ...values,
      liveRegion: values.liveRegion.shift(),
      childBorn: values.childBorn && 1,
      wedded: values.wedded && 1,
      work: values.work && 1,
      sex: values.sex === "male" ? 1 : 0,
      telephone: `${values.telephone}`,
    };
    delete finalValue.comfirm;
    delete finalValue.prefix;

    return finalValue;
  };

  const onFinish = async (values) => {
    const finalValue = useFormatForm(values);
    console.log(finalValue);
    const res = await axios.post(`/api2/register`, finalValue);
    const { success, data } = res.data;
    console.log("RES", data);
    if (success) {
      message.success("注册成功! 请返回登录");
      Modal.success({
        title: "注册成功!",
        content: `系统为您分配的账号为: ${data} , 请您返回登录`,
      });
    } else {
      message.error(`注册失败, ${data}`);
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
        residence: ["zhejiang", "hangzhou", "xihu"],
        prefix: "86",
      }}
      scrollToFirstError
      autoComplete='off'
    >
      <Form.Item
        name="name"
        label="真实姓名"
        tooltip="请务必填写真实姓名"
        rules={[
          {
            required: true,
            message: "请务必填写真实姓名",
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
            type: "array",
            required: true,
            message: "选择你的现居地",
          },
        ]}
      >
        <Cascader options={residences} />
      </Form.Item>

      <Form.Item
        name="identification"
        label="身份证号码"
        rules={[
          {
            required: true,
            message: "请填写您的身份证号",
          },
        ]}
      >
        <Input
          style={{
            width: "100%",
          }}
        />
      </Form.Item>
      <Form.Item
        name="relatedCreditCard"
        label="银行卡号"
        rules={[
          {
            required: true,
            message: "请填写您的银行卡号",
          },
        ]}
      >
        <Input
          style={{
            width: "100%",
          }}
        />
      </Form.Item>
      <Form.Item
        name="sex"
        label="性别"
        rules={[{ required: true, message: "请选择你的性别" }]}
      >
        <Select placeholder="选择你的性别">
          <Option value="male">男</Option>
          <Option value="female">女</Option>
          {/* <Option value="other">Other</Option> */}
        </Select>
      </Form.Item>
      <Form.Item
        name="telephone"
        label="手机号码"
        rules={[
          {
            required: true,
            message: "请输入你的手机号",
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
          maxLength="13"
        />
      </Form.Item>

      <Form.Item
        name="password"
        label="密码"
        rules={[
          {
            required: true,
            message: "请输入您的密码",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="确认密码"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "请输入确认密码",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error("两次密码输入不一致！"));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <footer className="inline-checkbox">
        <Form.Item name="wedded" label="婚姻" className="sameLine">
          <Switch
            checkedChildren="已婚"
            unCheckedChildren="未婚"
            defaultChecked={false}
          />
        </Form.Item>
        <Form.Item name="childBorn" label="子嗣" className="sameLine">
          <Switch
            checkedChildren="已育"
            unCheckedChildren="未育"
            defaultChecked={false}
          />
        </Form.Item>
        <Form.Item name="work" label="工作" className="sameLine">
          <Switch checkedChildren="就业" unCheckedChildren="待业" />
        </Form.Item>
      </footer>

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
        <Button type="primary" htmlType="submit" className="register">
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};

export default withRouter(RegistrationForm);

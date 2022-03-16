import React, { useRef, useState } from 'react';
import moment from 'moment';
import {
  Form,
  Input,
  InputNumber,
  DatePicker,
  Select,
  ConfigProvider,
  Upload,
  Checkbox,
  Button,
  message,
} from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { getBase64 } from '@/hooks/useGetBase64';
import AvatarUpload from '../../Admin/AdminInfo/AvatarUpload';
import './index.less';
import { ProductSettingType } from '@/types';

interface IProps {}

const SettingsForm: React.FC<IProps> = (props) => {
  const baseImgUrl = useRef<File>();

  /**点击提交回调 */
  const onFinish = (fieldsValue: any) => {
    const rangeTimeValue = fieldsValue['actDuration'];

    const values: ProductSettingType = {
      ...fieldsValue,
      duration: [
        rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
        rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
      ],
      isAdmit: fieldsValue.isAdmit ? 1 : 0,
      productDescription: fieldsValue.productDescription || '',
    };
    if (baseImgUrl.current) {
      getBase64(baseImgUrl.current, (imgBase) => {
        values['imgUrl'] = imgBase;
      });
    }

    console.log(values);
  };

  /**提交数据有误回调 */
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const rangeConfig = {
    rules: [
      {
        type: 'array' as const,
        required: true,
        message: '必须填写活动起止时间',
      },
    ],
  };

  return (
    <Form
      name="setting-form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="setting-form"
    >
      <Form.Item
        name={'productName'}
        label="活动名称"
        rules={[{ required: true, message: '必须填写活动名称' }]}
      >
        <Input />
      </Form.Item>
      <ConfigProvider locale={zhCN}>
        <Form.Item name={'actDuration'} label="选择时间" {...rangeConfig}>
          <DatePicker.RangePicker
            disabledDate={(current) =>
              current && current < moment().endOf('day')
            }
            showTime={{
              hideDisabledOptions: true,
              defaultValue: [
                moment('00:00:00', 'HH:mm:ss'),
                moment('00:00:00', 'HH:mm:ss'),
              ],
            }}
            format="YYYY-MM-DD HH:mm:ss"
          />
        </Form.Item>
      </ConfigProvider>

      <Form.Item
        name={'price'}
        label="产品单价"
        rules={[{ required: true, message: '需要设置产品单价' }]}
      >
        <InputNumber prefix="￥" />
      </Form.Item>
      <Form.Item
        name={'num'}
        label="产品数量"
        rules={[{ required: true, message: '需要设置产品售卖数量' }]}
      >
        <InputNumber min={1} />
      </Form.Item>
      <Form.Item
        name="isAdmit"
        valuePropName="checked"
        label="需要初筛"
        rules={[{ required: false, message: '必须设置是否需要初筛' }]}
      >
        <Checkbox className="form-checkbox" />
      </Form.Item>
      <Form.Item name='productDescription' label="产品描述">
        <Input.TextArea
          placeholder="请输入活动描述"
          showCount
          maxLength={500}
        />
      </Form.Item>
      <Form.Item name='imgUrl' label="上传产品图片" rules={[{ required: true, message: '必须上传产品图片' }]}>
        <AvatarUpload
          onCreateImg={(img) => {
            baseImgUrl.current = img;
          }}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
export default SettingsForm;

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
  Switch,
  Modal,
  Button,
  message,
} from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { getBase64 } from '@/hooks/useGetBase64';
import AvatarUpload from '../../Admin/AdminInfo/AvatarUpload';
import './index.less';
import { ProductSettingType } from '@/types';
import service from '@/hooks/interceptors';
import { AxiosResponse } from 'axios';

interface IProps {}

type FormResponseType = {};

const SettingsForm: React.FC<IProps> = (props) => {
  const baseImgUrl = useRef<File>();
  const [isModalVisible, setIsModalVisible] = useState(false);

  /**点击提交回调 */
  const onFinish = async (fieldsValue: any) => {
    const rangeTimeValue = fieldsValue['actDuration'];

    const values: ProductSettingType = {
      ...fieldsValue,
      startTime: rangeTimeValue[0].format('YYYY-MM-DD HH:mm'),
      endTime: rangeTimeValue[1].format('YYYY-MM-DD HH:mm'),
      isAdmit: fieldsValue.isAdmit ? 1 : 0,
      productDescription: fieldsValue.productDescription || '',
      imgName: baseImgUrl.current?.name,
    };
    delete (values as any).actDuration;

    if (baseImgUrl.current) {
      getBase64(baseImgUrl.current, async (imgBase) => {
        values['imgBase'] = (imgBase as string).slice(
          (imgBase as string).indexOf(',') + 1,
        );
        delete (values as any).imgUrl;
        console.log(values);

        message.success('上传成功');
        // try {
        //   const { data } = await service.post<any, AxiosResponse<any>>(
        //     `/api/manager/product/add`,
        //     values,
        //   );
        //   if (data.success) {
        //     message.success('上传成功');
        //   } else {
        //     message.error(`上传失败`);
        //   }
        //   // if(res.data.)
        // } catch (err) {
        //   console.log(err);
        // }
      });
    }
  };

  /**提交数据有误回调 */
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleAdmit = () => {};

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
    <>
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
          label="初筛"
          rules={[{ required: false, message: '必须设置是否需要初筛' }]}
        >
          <Button onClick={() => setIsModalVisible(true)}>选择初筛条件</Button>
        </Form.Item>
        <Form.Item name="productDescription" label="产品描述">
          <Input.TextArea
            placeholder="请输入活动描述"
            showCount
            maxLength={500}
          />
        </Form.Item>
        <Form.Item name="imgUrl" label="上传产品图片">
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
      <Modal
        title="选择初筛条件"
        visible={isModalVisible}
        onOk={() => {
          setIsModalVisible(false);
        }}
        onCancel={() => {
          setIsModalVisible(false);
        }}
        style={{
          maxWidth: '300px',
        }}
      >
        <div
          className="modal"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="switch">
            <label>是否已婚: </label>
            <Switch
              checkedChildren="已婚"
              unCheckedChildren="未婚"
              defaultChecked
            />
          </div>
          <div className="switch">
            <label>子嗣情况: </label>
            <Switch
              checkedChildren="已有子嗣"
              unCheckedChildren="未有子嗣"
              defaultChecked
            />
          </div>
          <div className="switch">
            <label>工作情况: </label>
            <Switch
              checkedChildren="已工作"
              unCheckedChildren="待业"
              defaultChecked
            />
          </div>
          <div className="switch">
            <label>年龄限制: </label>
            <InputNumber />
            <Switch
              checkedChildren="大于"
              unCheckedChildren="小于"
              defaultChecked
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
export default SettingsForm;

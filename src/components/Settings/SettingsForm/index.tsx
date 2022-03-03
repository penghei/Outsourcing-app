import React, { useState } from 'react';
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
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import zhCN from 'antd/lib/locale/zh_CN';
import './index.less';

const { Option } = Select;

/**获取图片base64格式 */
function getBase64(img: File, callback: (imgBaseUrl: ImgBaseUrlType) => void) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

interface IProps {}
type ImgBaseUrlType = string | ArrayBuffer | null; //图片base64格式类型

const SettingsForm: React.FC<IProps> = (props) => {
  const [imgTempUrl, setTempUrl] = useState<ImgBaseUrlType>(); //上传框中显示图片
  const [imgLoading, setImgLoading] = useState(false); //上传框显示加载中

  /**点击提交回调 */
  const onFinish = (fieldsValue: any) => {
    const rangeTimeValue = fieldsValue['actDuration'];
    const img = fieldsValue.imgUrl.file.originFileObj;
    const values = {
      ...fieldsValue,
      duration: [
        rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
        rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
      ],
    };
    getBase64(img, (imgBase) => {
      values['imgUrl'] = imgBase;
    });
    console.log(values);
  };

  /**提交数据有误回调 */
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  /**上传前校验 */
  const beforeUpload = (file: File) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  /**上传时给框中添加预览图 */
  const handleUploadImg = (info: any) => {
    if (info.file.status === 'uploading') {
      setImgLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (imageUrl) => {
        setTempUrl(imageUrl);
        setImgLoading(false);
      });
    }
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
      <Form.Item name={'productDescription'} label="产品描述">
        <Input.TextArea
          placeholder="请输入活动描述"
          showCount
          maxLength={500}
        />
      </Form.Item>
      <Form.Item name={'imgUrl'} label="上传产品图片">
        <Upload
          name="goodsImg"
          listType="picture-card"
          className="goods-img-uploader"
          showUploadList={false}
          beforeUpload={beforeUpload}
          onChange={handleUploadImg}
        >
          {imgTempUrl ? (
            <img
              src={imgTempUrl as string}
              alt="avatar"
              style={{ width: '100%' }}
            />
          ) : (
            <div>
              {imgLoading ? <LoadingOutlined /> : <PlusOutlined />}
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          )}
        </Upload>
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
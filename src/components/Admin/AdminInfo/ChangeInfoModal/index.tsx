import React, { useState, useRef } from 'react';
import { Modal, Button, Form, Input, Checkbox } from 'antd';
import { AdminInfoType, AdminChangeType } from '@/types';
import { getBase64 } from '@/hooks/useGetBase64';
import AvatarUpload from '../AvatarUpload';

interface IProps {
  initalValues?: AdminChangeType;
  visible: boolean;
  onCreate: (values: AdminChangeType) => void;
  onCancel: () => void;
}
const CollectionCreateForm: React.FC<IProps> = ({
  initalValues,
  visible,
  onCancel,
  onCreate,
}) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const administerAvatar = useRef<File>();

  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        (values as any).administerAvatar = administerAvatar.current;
        onCreate(values);
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <>
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={onCancel}
      >
        <Form
          form={form}
          name="admin-info-form"
          layout="vertical"
          initialValues={initalValues}
          autoComplete="off"
        >
          <Form.Item label="管理员用户名" name="administerId">
            <Input />
          </Form.Item>
          <Form.Item label="管理员电话号码" name="administerTelephone">
            <Input />
          </Form.Item>
          <Form.Item label="上传新头像" name="administerAvatar">
            <AvatarUpload
              onCreateImg={(img: File) => {
                administerAvatar.current = img;
              }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

const ChangeInfoModal = () => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values: AdminChangeType) => {
    console.log(values);
    const img = values.administerAvatar;
    getBase64(img, (imgBase) => {
      if (typeof imgBase === 'string') {
        (values.administerAvatar as any) = imgBase;
      }
    });
    console.log(values);
    //提交接口
    setVisible(false);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        更改信息
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </>
  );
};

export default ChangeInfoModal;

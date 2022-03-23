import React, { useState, useEffect } from 'react'
import { Modal, Button, Form, message } from 'antd';
import EditInfo from '../EditInfo';
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useRecoilState, useRecoilValue } from 'recoil';
import { UserInformation } from '../../../../store/atoms';
import axios from 'axios';
import service from '../../../../myaxios/interceptors';

export default function ShowInfo() {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);

  const [infoForShow, setUserInfo] = useRecoilState(UserInformation)
  const [modalText, setModalText] = useState(<EditInfo form={form} infoProps={infoForShow} />);

  const { userId, name, telephone, liveRegion, wedded, childBorn, work, sex } = infoForShow;
  const showModal = () => {
    setVisible(true);
  };
  const handleOk = async (values) => {
    console.log('Received values of form: ', values);
    for (let key in values) {
      if (values[key] === undefined) values[key] = 0;
    }
    const formatValues = {
      ...infoForShow,
      ...values,
      childBorn: values.childBorn && 1,
      wedded: values.wedded && 1,
      work: values.work && 1,
      telephone: `+86${values.telephone}`,
      userId,
    }
    console.log(formatValues)
    setVisible(false);
    // try {
    //   const { data } = await service.post(`/api2/customer/update`, formatValues, {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //   console.log(data)
    //   if (data.success) {
    //     setUserInfo(data.data)
    //      message.success('修改成功!')
    //   } else {
    //     message.error('修改失败')
    //   }
    // } catch (err) {
    //   console.error(err)
    // }


  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div className='info_container'>
      <dl className="dl-horizontal">
        <dt><strong>ID:</strong></dt>
        <dd>{userId}</dd>
      </dl>
      <dl className="dl-horizontal">
        <dt>用户名:</dt>
        <dd>{name}</dd>
      </dl>
      <dl className="dl-horizontal">
        <dt>性别:</dt>
        <dd>{sex}</dd>
      </dl>
      <dl className="dl-horizontal">
        <dt>手机号:</dt>
        <dd>{telephone}</dd>
      </dl>
      <dl className="dl-horizontal">
        <dt>所在区域:</dt>
        <dd>{liveRegion}</dd>
      </dl>
      <dl className="dl-horizontal">
        <dt>婚姻状况:</dt>
        <dd>{wedded ? '已婚' : '未婚'}{childBorn ? '已育' : '未育'}</dd>
        {/* <dd>{userIsChildBorn?'已育':'未育'}</dd> */}
      </dl>

      <dl className="dl-horizontal">
        <dt>工作状况:</dt>
        <dd>{work ? '就业' : '待业'}</dd>
      </dl>
      <Button type="primary" onClick={showModal} id="editButton">
        编辑信息
      </Button>
      <Modal
        title="个人信息修改"
        visible={visible}
        okButtonProps={{ htmlType: "submit" }}
        okText='确定'
        cancelText='取消'
        onOk={() => {
          form.setFieldsValue({ ...form.getFieldValue(true) });
          form.validateFields()
            .then(values => {
              form.resetFields();
              handleOk(values);
            })
            .catch(info => {
              console.log('Validate Failed:', info);
            });
        }}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div>{modalText}</div>
      </Modal>
    </div>

  )
}


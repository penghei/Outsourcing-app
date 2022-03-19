import React, { useState, useEffect } from 'react'
import { Modal, Button, Form } from 'antd';
import EditInfo from '../EditInfo';
import axios from 'axios';
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useRecoilValue } from 'recoil';
import { UserInformation } from '../../../../store/atoms';

export default function ShowInfo() {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);

  // const [modalText, setModalText] = React.useState();
  // const[infoForShow,setInfoForShow]=React.useState({});
  // const [confirmLoading, setConfirmLoading] = React.useState(false);
  // useEffect(()=>{
  //   axios.get('/xxx?userId=13245')   //此处有和order一样的问题，userId从哪里请求得到呢？？？/(ㄒoㄒ)/~~
  //   .then(function(res){
  //       console.log(res);
  //       setModalText(<EditInfo form={form} infoProps={res.data}/>);
  //       setInfoForShow(res.data);
  //     })
  //     .catch(function(err){
  //       console.log(err);
  //     });
  // })


  //test---------------------------------------
  // let data = {
  //   "userId": 13245, //用户ID
  //   "userIdentification": null, //不用管
  //   "userName": "曾勇", //用户名字
  //   "userTelephone": "11111111111", //用户手机
  //   "userRegion": "四川成都", //用户所在区域
  //   "userIsWedding": 0, //是否结婚，0代表无
  //   "userIsChildBorn": 1, //是否有孩子，0代表无
  //   "userIsWork": 1, //是否在工作，1代表有
  //   "userSex": 1 //性别，1代表男性，0代表女性
  // }
  const infoForShow = useRecoilValue(UserInformation)
  const [modalText, setModalText] = useState(<EditInfo form={form} infoProps={infoForShow} />);
  //--------------------------------------------------------------------------------------------------------- 

  const { userId, userName, userTelephone, userRegion, userIsWedding, userIsChildBorn, userIsWork, userSex } = infoForShow;
  const showModal = () => {
    setVisible(true);
  };
  const handleOk = (values) => {
    console.log('Received values of form: ', values);
    setVisible(false);
    //修改后提交数据
    // axios.post('/xxx', values)
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
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
        <dd>{userName}</dd>
      </dl>
      <dl className="dl-horizontal">
        <dt>性别:</dt>
        <dd>{userSex}</dd>
      </dl>
      <dl className="dl-horizontal">
        <dt>手机号:</dt>
        <dd>{userTelephone}</dd>
      </dl>
      <dl className="dl-horizontal">
        <dt>所在区域:</dt>
        <dd>{userRegion}</dd>
      </dl>
      <dl className="dl-horizontal">
        <dt>婚姻状况:</dt>
        <dd>{userIsWedding ? '已婚' : '未婚'}{userIsChildBorn ? '已育' : '未育'}</dd>
        {/* <dd>{userIsChildBorn?'已育':'未育'}</dd> */}
      </dl>

      <dl className="dl-horizontal">
        <dt>工作状况:</dt>
        <dd>{userIsWork ? '就业' : '待业'}</dd>
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
          /*这里由于Switch组件在默认情况下，只要不点击，该字段 value为undefined，我尝试过使用Form.Item的nomalize方法，但仍需要点击才触发该函数，如果用户
          不修改此处的值，即不点击，将传回undefined，这里先修改并格式化values，再触发表单提交
          checked属性的值一般是bool型，但提交的数据需是num :1/0 ,我不知道会不会自动变，所以还是手动修改了/(ㄒoㄒ)/~~
          感觉这里处理的有些问题，求梓轩gg指点！！*/
          const prevalue = form.getFieldsValue(["married", "child", "work"]);
          for (let c in prevalue) {
            // console.log(c,prevalue[c]);
            if (prevalue[c] === undefined) {
              switch (c) {
                case 'married':
                  prevalue[c] = userIsWedding ? 1 : 0;
                  break;
                case 'child':
                  prevalue[c] = userIsChildBorn ? 1 : 0;
                  break;
                case 'work':
                  prevalue[c] = userIsWork ? 1 : 0;
                  break;
              }
            } else {
              prevalue[c] = prevalue[c] ? 1 : 0;
            }
          }
          // console.log(prevalue)

          form.setFieldsValue({ ...form.getFieldValue(true), ...prevalue });
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


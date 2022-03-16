import React, { useState } from 'react';
import { Image, Upload, Avatar, Tabs, Button } from 'antd';
import { PictureOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import './index.less';
import ChangeInfoModal from './ChangeInfoModal';
import { useRecoilState } from 'recoil';
import { loginState } from '@/atoms/atoms';


interface IProps {}


const AdminInfo: React.FC<IProps> = (props) => {
  const [codeSee, setCodeSee] = useState(false);
  const [adminInfo,setAdminInfo] = useRecoilState(loginState)
  const {administerTelephone:phone,administerId:userid,administerPassword:password} = adminInfo.info;

  return (
    <div className="admin-info">
      <aside className="avatar-block">
        <div className="avatar-img">
          <Image
            src={'https://file.ituring.com.cn/LargeCover/220221aede71623dcf92'}
            alt="avatar"
            width={200}
          />
          {/* <Avatar
            src={'https://file.ituring.com.cn/LargeCover/220221aede71623dcf92'}
            className="avatar-circle"
          /> */}
        </div>
      </aside>
      <main className="admin-detail">
        <header className="title">管理员信息</header>
        <main className="admin-info-block">
          <div className="info info-phone">
            <p>电话号码</p>
            <p>{phone}</p>
          </div>
          <div className="info info-account">
            <p>账号</p>
            <p>{userid}</p>
          </div>
          <div className="info info-password">
            <p>密码</p>
            <p>
              {codeSee ? password : '*****'}
              {'    '}
              <EyeInvisibleOutlined
                onClick={() => {
                  setCodeSee(!codeSee);
                }}
              />
            </p>
          </div>
        </main>
        <footer className='modal-btn'>
          <ChangeInfoModal setAdminInfo={setAdminInfo} adminInfo={adminInfo}/>
        </footer>
      </main>
    </div>
  );
};
export default AdminInfo;

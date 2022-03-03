import React, { useState } from 'react';
import { Image, Upload } from 'antd';
import { PictureOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import './index.less';

interface IProps {}
const AdminInfo: React.FC<IProps> = (props) => {
  const [codeSee, setCodeSee] = useState(false);

  return (
    <div className="admin-info">
      <aside className="avatar-block">
        <div className="avatar-img">
          <Image
            src={'https://file.ituring.com.cn/LargeCover/220221aede71623dcf92'}
            alt="avatar"
            width={300}
          />
        </div>
        <div className="upload-avatar">
          <PictureOutlined />
        </div>
      </aside>
      <main className="admin-detail">
        <header className="title">管理员信息</header>
        <main className="admin-info-block">
          <div className="info info-phone">
            <p>电话号码</p>
            <p>123456789101</p>
          </div>
          <div className="info info-account">
            <p>账号</p>
            <p>123456</p>
          </div>
          <div className="info info-password">
            <p>密码</p>
            <p>
              {codeSee ? '123456' : '*****'}{' '}
              <EyeInvisibleOutlined
                onClick={() => {
                  setCodeSee(!codeSee);
                }}
              />
            </p>
          </div>
        </main>
      </main>
    </div>
  );
};
export default AdminInfo;

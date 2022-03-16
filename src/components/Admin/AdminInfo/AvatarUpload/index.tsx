import React, { useState } from 'react';
import { Upload, message, Button } from 'antd';
import {
  UploadOutlined,
  LoadingOutlined,
  PlusOutlined,
} from '@ant-design/icons';

interface IProps {
  onCreateImg:(img:File)=>void
}
import { ImgBaseUrlType } from '@/types';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

const AvatarUpload: React.FC<IProps> = ({
  onCreateImg
}) => {
  const [imgTempUrl, setTempUrl] = useState<ImgBaseUrlType>(); //上传框中显示图片
  const [imgLoading, setImgLoading] = useState(false); //上传框显示加载中

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

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('只能上传JPG/PNG格式的图片!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('图片不能大于2MB');
    }
    console.log(file);
    onCreateImg(file)
    return isJpgOrPng && isLt2M;
  };

  return (
    <>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
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
            <div style={{ marginTop: 8 }}>上传</div>
          </div>
        )}
      </Upload>
    </>
  );
};
export default AvatarUpload;

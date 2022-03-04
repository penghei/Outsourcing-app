import { ImgBaseUrlType } from '@/types';

/**获取图片base64格式 */
export const getBase64 = (
  img: File,
  callback: (imgBaseUrl: ImgBaseUrlType) => void,
) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

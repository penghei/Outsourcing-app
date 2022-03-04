export type ImgBaseUrlType = string | ArrayBuffer | null; //图片base64格式类型

export type routeType = '/admin' | '/data' | '/userlist' | '/setting' | '/';

export type AdminInfoType = {
  administerId: string;
  administerTelephone: string;
  administerPassword: string;
  adminAvatar: ImgBaseUrlType;
};

export type AdminChangeType = {
  administerId: string;
  administerTelephone: string;
  administerAvatar: File;
};


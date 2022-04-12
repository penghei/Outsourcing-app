export type ImgBaseUrlType = string | ArrayBuffer | null; //图片base64格式类型

export type routeType =
  | '/admin'
  | '/data'
  | '/userlist-record'
  | '/setting'
  | '/'
  | '/userlist-access';

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

export type AdminLoginType = {
  username: string;
  password: string;
};

export type AdminLoginResponseType = {
  code: 200 | 500;
  success: boolean;
  message: '登录成功' | '登录失败';
  data: string | null;
};

export type ProductSettingType = {
  productName: string;
  productDescription: string;
  imgUrl: ImgBaseUrlType; //产品图片链接
  isAdmit: 0 | 1; //是否具有准入初筛:0表示没有,1表示有
  startTime: string; //活动开始时间，格式:yyyy/MM/dd/hh/mm
  endTime: string; //活动结束时间，格式如上,不强制要求有
  num: number; //活动产品数量
  price: number; //活动产品单价
};

export type LoginStateType = {
  isLogin: boolean;
  info: {
    administerId: string; //管理员账号
    administerTelephone: string; //管理员电话
    administerPassword: string;
  };
};

export type TradeRecordType = {
  tradeId: number; //交易记录
  tradeUserId: number; //用户ID
  tradeMoney: number; //交易金额
  activityId: number; //活动ID
  tradeTime: string; //交易时间
  tradeStatus?: Object; //这条是交易状态，如果没成功是不会把这条数据发出来的
};

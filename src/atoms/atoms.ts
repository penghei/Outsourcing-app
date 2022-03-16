import { atom } from 'recoil';

export const loginState = atom({
  key: 'loginState',
  default: {
    isLogin: false,
    info: {
      administerId: '2892788722828', //管理员账号
      administerTelephone: '19082373921', //管理员电话
      administerPassword:'123456'
    },
  },
});

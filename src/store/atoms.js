import { atom } from "recoil";

/**被选的商品 */
export const SeckillingGoodsInfo = atom({
  key: "SeckillingGoodsInfo",
  default: {},
});

/**商品列表 */
export const AllGoodsList = atom({
  key: "AllGoodsList",
  default: {},
});


/**用户信息*/
export const UserInformation = atom({
  key: "UserInformation",
  default: {},
});

/**登录状态（是否登录） */
export const UserLoginState = atom({
  key: "UserLoginState",
  default: true,
});


export const GoodsPageLoading = atom({
  key:'GoodsPageLoading',
  default:false
})
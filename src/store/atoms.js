import { atom } from "recoil";
import {
  goodsInfo,
  userInformation,
  allGoodsListTestData
} from "../response_data_example";

/**被选的商品 */
export const SeckillingGoodsInfo = atom({
  key: "SeckillingGoodsInfo",
  default: goodsInfo,
});

/**商品列表，即所有商品，这个可能不一定需要 */
export const AllGoodsList = atom({
  key: "AllGoodsList",
  default: allGoodsListTestData,
});


/**用户信息*/
export const UserInformation = atom({
  key: "UserInformation",
  default: userInformation,
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
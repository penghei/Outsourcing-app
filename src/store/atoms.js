import { atom } from "recoil";
import { goodsInfo,userInformation } from "../response_data_example";


/**被选的商品 */
export const SeckillingGoodsInfo = atom({
  key: "SeckillingGoodsInfo",
  default: goodsInfo,
});

/**用户信息,如果没有登录除了ifLogin之外都为空 */
export const UserInformation = atom({
  key:'UserInformation',
  default:userInformation
})


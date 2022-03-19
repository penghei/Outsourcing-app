import { atom } from "recoil";
import {
  allGoodsListTestData,
  goodsInfo,
  tradeInfo,
  userInformation,
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

/**正在被购买的商品 */
export const PurchaseGoods = atom({
  key: "PurchaseGoods",
  default: {},
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

/** 点击秒杀后的订单信息*/
export const OrderInformation = atom({
  key: "OrderInformation",
  default: goodsInfo,
});

/**单次交易信息 */
export const TradeInformation = atom({
  key: "TradeInformation",
  default: tradeInfo,
});

import { atom } from "recoil";
import {
  goodsInfo,
  tradeInfo,
  userInformation,
} from "../response_data_example";

/**被选的商品 */
export const SeckillingGoodsInfo = atom({
  key: "SeckillingGoodsInfo",
  default: goodsInfo,
});

export const PurchaseGoods = atom({
  key: "PurchaseGoods",
  default: {},
});

/**用户信息*/
export const UserInformation = atom({
  key: "UserInformation",
  default: userInformation,
});

export const UserLoginState = atom({
  key: "UserLoginState",
  default: true,
});

/** 点击秒杀后的订单信息*/
export const OrderInformation = atom({
  key: "OrderInformation",
  default: {
    ...goodsInfo,
    amount: 1,
    totalPrice: 100,
  },
});

export const TradeInformation = atom({
  key: "TradeInformation",
  default: tradeInfo
})
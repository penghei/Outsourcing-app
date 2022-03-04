import { atom } from "recoil";


/**被选的商品 */
export const SeckillingGoodsInfo = atom({
  key: "SeckillingGoodsInfo",
  default: {
    pic: "#",
    name: "aaaaaaaaaaaaaaa",
    price: "12345",
    amount: "123",
    startTime: "2022/03/02/12/23",
    endTime: "2022/04/02/00/00",
    id: "123456",
    details: "这是一个很好的理财产品,孩子吃了还要吃,敏感肌也能用,下次还会再买",
  },
});

/**用户信息,如果没有登录除了ifLogin之外都为空 */
export const UserInformation = atom({
  key:'UserInformation',
  default:{
    ifLogin:false,
    userName:'xiaoming',
    avatarPic:'#'
  }
})


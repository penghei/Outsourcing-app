import { atom } from "recoil";

export const counterState = atom({
  key: "counterState",
  default: 0,
});

export const selectedGoodsInfo = atom({
  key: "selectedGoodsInfo",
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

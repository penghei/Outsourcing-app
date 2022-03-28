import React, { useEffect, useState } from "react";
import "./index.scss";
import imgUrl from "@/assest/purse.png";
import service from "@/myaxios/interceptors.js";
import { message } from "antd";

export default function MyPurse() {
  const [userMoney, setUserMoney] = useState("2252.8");

  const handleCharge = async () => {
    const { data } = await service.post(`/api2/customer/charge`, JSON.stringify(100));
    console.log(data);
    if (data.success) {
      setUserMoney(data.data);
    } else {
      message.error("充值失败");
    }
  };

  return (
    <div className="wrapper-purse">
      {/* <img src={imgUrl} alt="我的钱袋" /> */}
      <div className="right-side">
        <div className="balance">我的账户余额</div>
        <div className="money-data">￥ {userMoney}</div>
        <button className="recharge" onClick={handleCharge}>
          去充值
        </button>
      </div>
    </div>
  );
}

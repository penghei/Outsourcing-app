import { Card, notification, Skeleton } from "antd";
import { useRecoilValue } from "recoil";
import {
  SeckillingGoodsInfo,
} from "store/atoms";
import React, { useEffect } from "react";
import "./index.scss";

const ComfirmGoods = () => {
  const { productImgUrl, price, num, productName, productDescription } =
    useRecoilValue(SeckillingGoodsInfo);

  useEffect(() => {
    notification.info({
      message: "请确认您的订单",
      description: `确认后点击下方"确认购买"。
            如果想返回可以点击"我再看看"`,
    });
  }, []);

  return (
    <div className="confirm-goods-card">
      <aside className="goods-img">
        <img src={productImgUrl} />
      </aside>
      <main className="goods-detail">
        <header className="title">{productName}</header>
        <article className="goods-info">
          <div>
            <span>价格：</span>
            <span>{price}</span>
          </div>
          <div>
            <span>购买数量：</span>
            <span>{num} （限购1）</span>
          </div>
          <div>
            <span>商品描述：</span>
            <span>{productDescription}</span>
          </div>
        </article>
      </main>
    </div>
  );
};

export default ComfirmGoods;

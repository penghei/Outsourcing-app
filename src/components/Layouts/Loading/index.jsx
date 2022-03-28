import { Spin } from "antd";
import React from "react";
import "./index.scss";
import LoadingPic from "@/assest/loading.gif";

const Loading = () => {
  return (
    <div className="loading-page">
      {/* <Spin tip="正在加载中,请稍等......" size="large"></Spin> */}
      <div className="spin">
        <img src={LoadingPic} />
        <p>正在加载中,请稍等......</p>
      </div>
    </div>
  );
};

export default Loading;

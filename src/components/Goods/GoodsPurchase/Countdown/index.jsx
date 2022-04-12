import React, { useState, useEffect } from "react";
import { useFormatTime } from "@/hooks/useFormatTime.js";
//displayArr是方便map显示图片的数组
import "./index.scss";
import { withRouter } from "react-router-dom";
import num0 from "../../../../assest/000.png";
import num1 from "../../../../assest/111.png";
import num2 from "../../../../assest/222.png";
import num3 from "../../../../assest/333.png";
import num4 from "../../../../assest/444.png";
import num5 from "../../../../assest/555.png";
import num6 from "../../../../assest/666.png";
import num7 from "../../../../assest/777.png";
import num8 from "../../../../assest/888.png";
import num9 from "../../../../assest/999.png";

const displayArr = [
  {
    img1: "0",
    img2: "1",
    text: "天",
  },
  {
    img1: "2",
    img2: "3",
    text: "时",
  },
  {
    img1: "4",
    img2: "5",
    text: "分",
  },
  {
    img1: "6",
    img2: "7",
    text: "秒",
  },
];


const Countdown = ({ startTime, endTime, getIfOnTime }) => {
  const [ifOnTime, setIfOnTime] = useState("before");
  const [displayTime, setDisplayTime] = useState([]);

  let timerId = null;

  const onTimeTitle = {
    before: `距离开始时间还有:`,
    now: `秒杀时间还剩:`,
    after: `时间已过`,
    error: ``,
  };

  //0-9数字的图片
  const timeImg = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9];

  useEffect(() => {
    timeFormat();
    return () => {
      clearTimeout(timerId);
    };
  }, [startTime, endTime]);

  //处理倒计时
  const handleTime = (ifOnTime, displayTime) => {
    setIfOnTime(ifOnTime);
    setDisplayTime(displayTime);
    if (displayTime !== "") {
      timerId = setTimeout(timeFormat, 1000);
    }
    getIfOnTime(ifOnTime);
  };

  const timeFormat = () => {
    const now = new Date();
    const start = new Date(startTime);
    const end = new Date(endTime);

    const startTimeStamp = start.getTime();
    const endTimeStamp = end.getTime();
    const nowTimeStamp = now.getTime();

    if (startTimeStamp > endTimeStamp) {
      console.warn("秒杀时间格式不对");
      handleTime("error", "");
      return;
    }

    if (startTimeStamp > nowTimeStamp) {
      handleTime("before", useFormatTime(now, start));
    } else if (startTimeStamp < nowTimeStamp && nowTimeStamp < endTimeStamp) {
      handleTime("now", useFormatTime(now, end));
    } else if (nowTimeStamp > endTimeStamp) {
      handleTime("after", "");
    }
  };

  return (
    <>
      <p className="goods-time-title">{onTimeTitle[ifOnTime]}</p>
      <div className="goods-time">
        {displayTime.length
          ? displayArr.map(({ img1, img2, text }, index) => {
              return (
                // 从displayTime数组按顺序取出每一位的数字
                //然后对照timeImg找到这些数字对应的图片链接
                <div key={index} className="time-pic-block">
                  <img src={timeImg[displayTime[img1]]} />
                  <img src={timeImg[displayTime[img2]]} />
                  <p>{text}</p>
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
};

export default withRouter(Countdown);

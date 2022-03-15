import React, { useState, useEffect } from 'react';
import { useFormatTime } from '@/hooks/useFormatTime.js'
//displayArr是方便map显示图片的数组
import { displayArr } from '@/response_data_example';
import './index.scss'
import { withRouter } from 'react-router-dom';

const Countdown = ({
    startTime,
    endTime,
    getIfOnTime
}) => {
    const [ifOnTime, setIfOnTime] = useState('before')
    const [displayTime, setDisplayTime] = useState([])

    let timerId = null;

    const onTimeTitle = {
        before: `距离开始时间还有:`,
        now: `秒杀时间还剩:`,
        after: `时间已过`,
        error: ``
    }

    //0-9数字的图片
    const timeImg = [
        `https://pic.imgdb.cn/item/623058485baa1a80ab5dc62f.png`,
        `https://pic.imgdb.cn/item/623058485baa1a80ab5dc633.png`,
        `https://pic.imgdb.cn/item/623058485baa1a80ab5dc639.png`,
        `https://pic.imgdb.cn/item/623058485baa1a80ab5dc641.png`,
        `https://pic.imgdb.cn/item/623058485baa1a80ab5dc64a.png`,
        `https://pic.imgdb.cn/item/623058805baa1a80ab5de1f2.png`,
        `https://pic.imgdb.cn/item/623058805baa1a80ab5de1f5.png`,
        `https://pic.imgdb.cn/item/623058805baa1a80ab5de1f9.png`,
        `https://pic.imgdb.cn/item/623058805baa1a80ab5de201.png`,
        `https://pic.imgdb.cn/item/623058805baa1a80ab5de20d.png`
    ]


    useEffect(() => {
        timeFormat()
        return () => {
            clearTimeout(timerId)
        }
    }, [startTime, endTime])

    //处理倒计时
    const handleTime = (ifOnTime, displayTime) => {
        setIfOnTime(ifOnTime)
        setDisplayTime(displayTime)
        if (displayTime !== '') {
            timerId = setTimeout(timeFormat, 1000)
        }
        getIfOnTime(ifOnTime)
    }


    const timeFormat = () => {
        const now = new Date();
        const start = new Date(startTime);
        const end = new Date(endTime);

        const startTimeStamp = start.getTime()
        const endTimeStamp = end.getTime()
        const nowTimeStamp = now.getTime()

        if (startTimeStamp > endTimeStamp) {
            console.warn('秒杀时间格式不对')
            handleTime('error', '')
            return;
        }

        if (startTimeStamp > nowTimeStamp) {
            handleTime('before', useFormatTime(now, start))
        } else if (startTimeStamp < nowTimeStamp && nowTimeStamp < endTimeStamp) {
            handleTime('now', useFormatTime(now, end))
        } else if (nowTimeStamp > endTimeStamp) {
            handleTime('after', '')
        }
    }

    return (
        <>
            <p className='goods-time-title'>
                {onTimeTitle[ifOnTime]}
            </p>
            <div className='goods-time'>
                {displayTime.length ?
                    displayArr.map(({ img1, img2, text }, index) => {
                        return (
                            // 从displayTime数组按顺序取出每一位的数字
                            //然后对照timeImg找到这些数字对应的图片链接
                            <div key={index} className="time-pic-block">
                                <img src={timeImg[displayTime[img1]]} />
                                <img src={timeImg[displayTime[img2]]} />
                                <p>{text}</p>
                            </div>
                        )
                    })
                    : ''
                }
            </div>
        </>
    );
}

export default withRouter(Countdown);

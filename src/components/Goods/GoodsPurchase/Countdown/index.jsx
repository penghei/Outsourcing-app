import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useFormatTime } from '@/hooks/useFormatTime.js'
import './index.scss'

const Countdown = ({
    startTime,
    endTime,
    ifCanBuy
}) => {
    const [ifOnTime, setIfOnTime] = useState(0)
    const [displayTime, setDisplayTime] = useState(``)

    const onTimeBtn = {
        0: (<Button type='round' size='large' disabled>时间未到</Button>),
        1: (<Button type='round' size='large'>立即抢购</Button>),
        2: (<Button type='round' size='large' disabled>活动已过期</Button>),
        3: (<Button type='round' size='large' disabled>暂不能购买</Button>)
    }
    const onTimeTitle = {
        0: `距离开始时间还有:`,
        1: `秒杀时间还剩:`,
        2: `时间已过`,
        3: ``
    }

    useEffect(() => {
        timeFormat()
    }, [startTime, endTime])


    const timeFormat = () => {
        const now = new Date();
        const start = new Date(startTime);
        const end = new Date(endTime);

        const startTimeStamp = start.getTime()
        const endTimeStamp = end.getTime()
        const nowTimeStamp = now.getTime()

        if (startTimeStamp > endTimeStamp) {
            console.warn('秒杀时间格式不对')
            setIfOnTime(3)
            setDisplayTime('')
            return
        }

        if (startTimeStamp > nowTimeStamp) {
            console.log('not start')
            setIfOnTime(0)
            setDisplayTime(useFormatTime(now, start))
            setTimeout(timeFormat, 1000)
        } else if (startTimeStamp < nowTimeStamp && nowTimeStamp < endTimeStamp) {
            console.log('start')
            setIfOnTime(1)
            setDisplayTime(useFormatTime(now, end))
            setTimeout(timeFormat, 1000)
        } else if (nowTimeStamp > endTimeStamp) {
            console.log('finish')
            setIfOnTime(2)
            setDisplayTime('')
        }
    }

    return (
        <>
            <p className='goods-time-title'>
                {
                    onTimeTitle[ifOnTime]
                }
            </p>
            <p className='goods-time'>{displayTime}</p>
            <footer className='goods-buy-button'>
                {
                    ifCanBuy
                        ? onTimeBtn[ifOnTime]
                        : (
                            <div className='noapply-block'>
                                <Button type='round' size='large' disabled>没有权限不能购买</Button>
                                <Button type='round' size='large'>申请权限</Button>
                            </div>
                        )
                }
            </footer>
        </>
    );
}

export default Countdown;

import React from 'react';
import { Carousel } from 'antd';
import './index.scss'

const MyCarousel = () => {

    const carouselPics = [
        {
            key: '001',
            src: "https://v.icbc.com.cn/userfiles/ADResources/AD_ICBC/2022%e5%b9%b4/%e4%b8%aa%e9%87%91%e9%83%a8/2022qxhkjjdt_20220101_20221231_1900_380.jpg",
            name: '001'
        },
        {
            key: '002',
            src: "https://v.icbc.com.cn/userfiles/ADResources/AD_ICBC/2022%e5%b9%b4/%e4%b8%aa%e9%87%91%e9%83%a8/grjjsgflyh_20220101_20221231_1900_380.jpg",
            name: '001'
        },
        {
            key: '003',
            src: "https://v.icbc.com.cn/userfiles/ADResources/AD_ICBC/2022%e5%b9%b4/%e9%87%91%e8%9e%8d%e5%b8%82%e5%9c%ba%e9%83%a8/guitnb_20220301_20220303_1900380.jpg",
            name: '001'
        },
        {
            key: '004',
            src: "https://v.icbc.com.cn/userfiles/ADResources/AD_ICBC/2022%e5%b9%b4/%e7%bd%91%e7%bb%9c%e9%87%91%e8%9e%8d%e9%83%a8/jifdqh_20220301_20220331_1900380.jpg",
            name: '001'
        },
        {
            key: '005',
            src: "https://v.icbc.com.cn/userfiles/ADResources/AD_ICBC/2022%e5%b9%b4/%e8%bf%90%e8%a1%8c%e7%ae%a1%e7%90%86%e9%83%a8/gongyxc_20220106_20220331_1900380.jpg",
            name: '001'
        }
    ]

    return (
        <>
            <Carousel autoplay className='my-carousel'>
                {carouselPics.map(pic => {
                    return (
                        <div key={pic.key}>
                            <img src={pic.src} alt={pic.name} />
                        </div>
                    )
                })
                }
            </Carousel>
        </>
    );
}

export default MyCarousel;

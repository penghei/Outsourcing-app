import React from 'react';
import { Carousel } from 'antd';
import './index.scss'

const MyCarousel = () => {

    const carouselPics = [
        {
            key: '001',
            src: "#",
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

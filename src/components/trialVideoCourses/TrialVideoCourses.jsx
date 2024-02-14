import React from 'react'
import "./trialVideoCourses.scss"

import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/scss"
import 'swiper/css/effect-coverflow';

import { EffectCoverflow } from 'swiper/modules';

export default function FreeVideoCourses() {
  return (
    <div className='trial-video-courses'>
      <div className="container">
        <div className="content">
          <div className="trial-text-part">
            <h1>Пробные видеоуроки</h1>
            <p>Мы уверены, что после просмотра пробных видео-уроков вы захотите узнать больше и присоединиться к нашему образовательному сообществу.</p>
          </div> 
          <Swiper 
          effect={"coverflow"}
          slidesPerView={3}
          centeredSlides={true}
          initialSlide={1}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 10,
            depth: 100,
            modifier: 2,
          }}
          modules={[EffectCoverflow]}
          className='swiper-container'
          >
            <SwiperSlide>
                <a href=""><div className="video-part">1</div></a>
            </SwiperSlide>
            <SwiperSlide>
                <a href=""><div className="video-part">2</div></a>
            </SwiperSlide>
            <SwiperSlide>
                <a href=""><div className="video-part">3</div></a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      
    </div>
  )
}

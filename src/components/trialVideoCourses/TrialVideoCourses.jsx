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
          slidesPerView={2}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 350,
            modifier: 1,
          }}
          breakpoints={{
            768: {
              depth: 2
            },
            1024: {
              slidesPerView: 3,
            }
          }}
          modules={[EffectCoverflow]}
          className='swiper'
          >
            <SwiperSlide>
              <div className="video-part">1</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="video-part">2</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="video-part">3</div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      
    </div>
  )
}

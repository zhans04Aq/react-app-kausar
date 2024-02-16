import React from 'react'
import "./trialVideoCourses.scss"

import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/scss"
import 'swiper/css/effect-coverflow';

import SliderCover from "../../assets/icons/Group_30.svg"
import Banner from "../../assets/icons/banner.svg"

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
          <a href="https://wa.me/77758281024">
            
            <img style={{width: "25rem"}} src={Banner}/>

          </a>
        </div>
      </div>

      
    </div>
  )
}

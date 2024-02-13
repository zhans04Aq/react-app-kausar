/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './find.scss'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import locationIcon from "../../assets/icons/location-icon.svg"
import phoneIcon from "../../assets/icons/phone-icon.svg"
import emailIcon from "../../assets/icons/email-icon.svg"
import findGradientBg from "../../assets/img/find-bg-gradient.png"

export default function Find() {
  return (
    <div className='find'>
      <img className='gradient-bg' src={findGradientBg} alt="" />
      <div className='container'>
        <h1 className='title'>Где вы можете найти нас</h1>
        <div className='content'>
          <div className='content-info'>
            <ul className='info-list'>
              <li className='info-item'>
                <div className='item-head'>
                  <span className='head-title'>
                    Местоположение
                  </span>
                  <span>
                    <img src={locationIcon}/>
                  </span>
                </div>
                <p className='text'>
                  г. Алматы, ул. Гоголя 86, БЦ КазЖол, 2 этаж, 14 офис
                </p>
              </li>

              <li className='info-item'>
                <div className='item-head'>
                  <span className='head-title'>
                    ТЕЛЕФОН
                  </span>
                  <span>
                    <img src={phoneIcon}/>
                  </span>
                </div>
                <p className='text'>
                  +7 (747) 555-23-04
                </p>
              </li>

              <li className='info-item'>
                <div className='item-head'>
                  <span className='head-title'>
                    ПОЧТА
                  </span>
                  <span>
                    <img src={emailIcon}/>
                  </span>
                </div>
                <p className='text'>
                  kausarconsult@gmail.com
                </p>
              </li>

            </ul>

            <div className='info-face'>
              <b>Контакное лицо</b>
              <p>Туриспаев Ержан Молдагалиев</p>
            </div>
            
            
          </div>
          
          
          
          <YMaps>
            <Map style={{width: "750px", height: "780px",position: "absolute", right: 0 }} defaultState={{ center: [43.259088, 76.936918], zoom: 15 }}>
              <Placemark geometry={[43.259088, 76.936918]}/>
            </Map>
          </YMaps>
        </div>
        
      </div>
    </div>
  )
}

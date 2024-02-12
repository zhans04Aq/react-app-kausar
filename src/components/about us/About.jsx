import React from "react";

import './about.scss'

import approvedIcon from '../../assets/icons/approved-icon.svg'
import rkFinance from '../../assets/icons/rk-finance-icon.svg'
import logo from '../../assets/icons/logo-about-us-icon.svg'
import flagIcon from '../../assets/icons/flag-icon.svg'
import targetIcon from '../../assets/icons/target-icon.svg'
import devices from '../../assets/img/devices-img.svg'

export default function About (){
    return(
        <div className="about">
            <div className="container">
            <div className="about-desktop-container">
                <h1 className="title">О нас </h1>
                <div className="content">
                    <div className="left-content">
                        <div className="icons">
                            <img src={approvedIcon} alt="" />
                            <img src={logo} alt="" />
                            <img src={rkFinance} alt="" />
                        </div>
                        <div className="big-text">
                            <h1>Конкурентоспособный.</h1>
                            <h1>Квалифицированный.</h1>
                            <h1>Аккредитованный.</h1>
                        </div>
                        <p>
                            Центр образован в 2015 году с целью <br /> оказания услуг по повышению <br /> квалификации специалистов <br /> финансово-экономического блока, для <br /> подготовки квалифицированных <br /> бухгалтеров, экономистов и <br /> финансистов. Является социальным <br /> партнером Алматинского <br /> государственного бизнес колледжа с <br /> 2019 года. 
                        </p>
                        <div className="goal">
                            <img src={flagIcon} alt="" />
                            <h3>Наша цель</h3>
                            <p>Обучение самых <br />
                            квалифицированных <br />
                            бухгалтеров в Казахстане.</p>
                        </div>
                        <div className="goal">
                            <img src={targetIcon} alt="" />
                            <h3>Наша миссия</h3>
                            <p>Создание сообщества <br />
                            грамотных и профессиональных <br />
                            бухгалтеров объединенных <br />
                            нашим учебным центром в <br />
                            каждом городе Казахстана!</p>
                        </div>
                    </div>
                    <img className="devices" src={devices} alt="" />
                </div>
                
            </div>
            <div className="about-mobile-container"></div>
            </div>
        </div>
    )
}
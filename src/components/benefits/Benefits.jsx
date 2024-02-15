/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import {motion} from "framer-motion"

import './benefits.scss'

import circleElement from '../../assets/img/circle-element.svg'

import lightSrc1 from '../../assets/img/light-src1.png'
import lightSrc2 from '../../assets/img/light-src2.png'
import lightSrc3 from '../../assets/img/light-src3.png'
import lightSrc4 from '../../assets/img/light-src4.png'
import noise from '../../assets/img/noice-fx-benefits.png'

const animation = {
  hidden: {
    x: -200,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: "2s"
  }
}

const cardFromLeft = {
  hidden: {
    x: -200,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: "1s"
  }
}
const cardFromRight = {
  hidden: {
    x: 200,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
  }
}

export default function Benefits(){
    return(
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{amount: 0.4}}
          transition={{duration: 3}}
          className="benefits"
        >
          
            <div  className="desktop-container">
              <img src={lightSrc1} alt="" className="light-src" id="light-1" />
              <img src={lightSrc2} alt="" className="light-src" id="light-2" />
              <img src={lightSrc3} alt="" className="light-src" id="light-3" />
              <img src={lightSrc4} alt="" className="light-src" id="light-4" />
              {/* <img src={noise} alt="" className="noise-fx" /> */}
                <div className="component-title">
                    <motion.h1 variants={animation}>В чем наши преимущества?</motion.h1>
                    <div className="scroller wow">

              <img src={noise} alt="" className="noise-fx" />

                <div className="benefits-head">
                  <h1 className="title-primary">
                    В чем наша преимущества?
                  </h1>
                  <marquee behavior="infinite" direction="left">
                    <ul>
                      <li>богатый опыт</li>
                      <li>подготовка к 1C 8.3</li>
                      <li>практическое обучение</li>
                      <li>индивидуальный подход</li>
                      <li>обучение у нас..</li>
                      <li>поддержка после обучения</li>
                      <li>богатый опыт</li>
                      <li>подготовка к 1C 8.3</li>
                      <li>практическое обучение</li>
                      <li>индивидуальный подход</li>
                      <li>обучение у нас..</li>
                      <li>поддержка после обучения</li>
                      <li>богатый опыт</li>
                      <li>подготовка к 1C 8.3</li>
                      <li>практическое обучение</li>
                      <li>индивидуальный подход</li>
                      <li>обучение у нас..</li>
                      <li>поддержка после обучения</li>
                      <li>богатый опыт</li>
                      <li>подготовка к 1C 8.3</li>
                      <li>практическое обучение</li>
                      <li>индивидуальный подход</li>
                      <li>обучение у нас..</li>
                      <li>поддержка после обучения</li>
                    </ul>
                  </marquee>
                </div>
                <div className="benefits-cards">
                    <img className='circle-element' src={circleElement} alt="" id="circle-1" />
                    <motion.div variants={cardFromLeft} className="card">
                        <div>
                            <h1>01</h1>
                            <h3>богатый опыт</h3>
                        </div>
                        <p>
                        Вы будете обучаться на <br /> профессиональной <br /> программе, которая <br /> является стандартом <br /> в области бухгалтерского <br /> учета.
                        </p>
                    </motion.div>
                    <motion.div variants={cardFromRight} className="card">
                        <div>
                            <h1>02</h1>
                            <h3>практическое обучение</h3>
                        </div>
                        <p>
                        Наши занятия основаны на <br /> реальных кейсах и живых <br /> примерах, что поможет вам <br /> лучше усвоить материал и <br /> научиться применять <br /> знания на практике.
                        </p>
                    </motion.div>
                    <motion.div variants={cardFromLeft} className="card">
                        <div>
                            <h1>03</h1>
                            <h3>подготовка к 1С 8.3</h3>
                        </div>
                        <p>
                        Вы будете обучаться на <br /> профессиональной <br /> программе, которая br является стандартом в <br /> области бухгалтерского <br /> учета.
                        </p>
                    </motion.div>
                    <img className='circle-element' src={circleElement} alt="" id="circle-2" />
                    <motion.div variants={cardFromRight} className="card">
                        <div>
                            <h1>04</h1>
                            <h3>индивидуальный подход</h3>
                        </div>
                        <p>
                        Мы стремимся к <br /> индивидуальному подходу <br /> к каждому студенту, <br /> учитывая их потребности <br /> и темп усовения <br /> материала.
                        </p>
                    </motion.div>
                    <img className='circle-element' src={circleElement} alt="" id="circle-3" />
                    <motion.div variants={cardFromLeft} className="card">
                        <div>
                            <h1>05</h1>
                            <h3>поддержка после обучения</h3>
                        </div>
                        <p>
                        По окончании курса мы <br /> оказываем поддержку в  <br /> поиске работы, <br /> консультируем по <br /> трудоустройству и даем <br /> рекомендации для успешного начала карьеры бухгалтера.

                        </p>
                    </motion.div>
                    <img className='circle-element' src={circleElement} alt="" id="circle-4" />
                    <motion.div variants={cardFromRight} className="card">
                        <div>
                            <h1>06</h1>
                            <h3>богатый опыт</h3>
                        </div>
                        <p>
                        Вы будете обучаться на <br /> профессиональной <br /> программе, которая <br /> является стандартом <br /> в области бухгалтерского <br /> учета.
                        </p>
                    </motion.div>
                </div>
            </div>
            <div className="mobile-container">

            </div>
        </div>
        </div>
        </motion.div>
    )
}
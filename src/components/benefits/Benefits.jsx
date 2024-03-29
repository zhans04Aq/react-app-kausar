/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";

import './benefits.scss'

import circleElement from '../../assets/img/circle-element.svg'

import lightSrc1 from '../../assets/img/light-src1.png'
import lightSrc2 from '../../assets/img/light-src2.png'
import lightSrc3 from '../../assets/img/light-src3.png'
import lightSrc4 from '../../assets/img/light-src4.png'
import noise from '../../assets/img/noice-fx-benefits.png'

import Reveal from "../animations/Reveal";


export default function Benefits(){
    return(
        <div 
          className="benefits"
        >
          

              <img src={noise} alt="" className="noise-fx" />

                <div className="benefits-head">
                  <Reveal direction="right">
                    <h1 className="title-primary">
                      В чем наши преимущества?
                    </h1>
                  </Reveal>
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
                    <Reveal direction={"left"}>
                      <div className="card">
                          <div>
                              <h1>01</h1>
                              <h3>богатый опыт</h3>
                          </div>
                          <p>
                          Вы будете обучаться на <br /> профессиональной <br /> программе, которая <br /> является стандартом <br /> в области бухгалтерского <br /> учета.
                          </p>
                      </div>
                    </Reveal>
                    <Reveal direction={"right"}>
                    <div className="card">
                        <div>
                            <h1>02</h1>
                            <h3>практическое обучение</h3>
                        </div>
                        <p>
                        Наши занятия основаны на <br /> реальных кейсах и живых <br /> примерах, что поможет вам <br /> лучше усвоить материал и <br /> научиться применять <br /> знания на практике.
                        </p>
                    </div>
                    </Reveal>
                    <Reveal direction={"left"}>
                    <div className="card">
                        <div>
                            <h1>03</h1>
                            <h3>подготовка к 1С 8.3</h3>
                        </div>
                        <p>
                        Вы будете обучаться на <br /> профессиональной <br /> программе, которая br является стандартом в <br /> области бухгалтерского <br /> учета.
                        </p>
                    </div>
                    </Reveal>
                    <img className='circle-element' src={circleElement} alt="" id="circle-2" />
                    <Reveal direction={"right"}>
                      <div className="card">
                          <div>
                              <h1>04</h1>
                              <h3>индивидуальный подход</h3>
                          </div>
                          <p>
                          Мы стремимся к <br /> индивидуальному подходу <br /> к каждому студенту, <br /> учитывая их потребности <br /> и темп усовения <br /> материала.
                          </p>
                      </div>
                    </Reveal>
                    <img className='circle-element' src={circleElement} alt="" id="circle-3" />
                    <Reveal direction={"left"}>
                      <div className="card">
                          <div>
                              <h1>05</h1>
                              <h3>поддержка после обучения</h3>
                          </div>
                          <p>
                          По окончании курса мы <br /> оказываем поддержку в  <br /> поиске работы, <br /> консультируем по <br /> трудоустройству и даем <br /> рекомендации для успешного начала карьеры бухгалтера.
                          </p>
                      </div>
                    </Reveal>
                    <img className='circle-element' src={circleElement} alt="" id="circle-4" />
                    <Reveal direction={"right"}>
                    <div className="card">
                        <div>
                            <h1>06</h1>
                            <h3>богатый опыт</h3>
                        </div>
                        <p>
                        Вы будете обучаться на <br /> профессиональной <br /> программе, которая <br /> является стандартом <br /> в области бухгалтерского <br /> учета.
                        </p>
                    </div>
                    </Reveal>
                </div>
            </div>
    )
}
import React from "react";

import './courses.scss'

import arrow from '../../assets/icons/courses-icons/arrow-sm-right-svgrepo-com.svg'

import RevealBottom from "../animations/RevealBottom";

export default function Courses(){
    return(
        <div id="courses" className="courses">
            <div className="desktop-container">
                <h1 className="title-primary">Выбери свои курсы</h1>
                <div className="card-container">
                  <RevealBottom>
                  <div className="card" id="card-1">
                        <div className="card-content">
                            <div className="upper-content">
                                <h1>Форма <br /> 910, ЭСФ</h1>
                            </div>
                            <div className="center-content">
                                <p>29, 990 KZT</p>
                            </div>
                            <div className="lower-content">
                                <button><a href="https://wa.me/77758281024">купить</a></button>
                                <button><a href="https://wa.me/77758281024"><img src={arrow} alt="" className="arrow" /></a></button>
                            </div>
                        </div>
                    </div>
                  </RevealBottom>
                  <RevealBottom>
                  <div className="card" id="card-5">
                        <div className="card-content">
                            <div className="upper-content">
                                <h1>Форма <br /> 910, ЭСФ</h1>
                            </div>
                            <div className="center-content">
                                <p>19,990 KZT</p>
                                <p>Зарплата сотрудников 15,990 KZT</p>
                            </div>
                            <div className="lower-content">
                                <button><a href="https://wa.me/77758281024">купить</a></button>
                                <button><a href="https://wa.me/77758281024"><img src={arrow} alt="" className="arrow" /></a></button>
                            </div>
                        </div>
                    </div>
                  </RevealBottom>
                  <RevealBottom>
                    <div className="card" id="card-2">
                    <div className="card-content">
                        <div className="upper-content">
                            <h1>Бухгалтерия в <br /> компанию</h1>
                        </div>
                        <div className="center-content">
                            <p>189,990 KZT</p>
                        </div>
                        <div className="lower-content">
                            <button><a href="https://wa.me/77758281024">купить</a></button>
                            <button><a href="https://wa.me/77758281024"><img src={arrow} alt="" className="arrow" /></a></button>
                        </div>
                    </div>
                </div>
                  </RevealBottom>
                  <RevealBottom>
                  <div className="card" id="card-3">
                        <div className="card-content">
                            <div className="upper-content">
                                <h1>Бухгалтер <br /> для ИП</h1>
                            </div>
                            <div className="center-content">
                                <p> Видео 39,990 KZT</p>
                                <p>c куратором 69,990 KZT</p>
                            </div>
                            <div className="lower-content">
                                <button><a href="https://wa.me/77758281024">купить</a></button>
                                <button><a href="https://wa.me/77758281024"><img src={arrow} alt="" className="arrow" /></a></button>
                            </div>
                        </div>
                    </div>
                  </RevealBottom>
                    <RevealBottom>
                    <div className="card" id="card-4">
                        <div className="card-content">
                            <div className="upper-content">
                            <h1>Всеобщее <br /> декларирование c <br /> кейсами</h1>
                            </div>
                            <div className="center-content">
                                <p>19,990 KZT</p>
                            </div>
                            <div className="lower-content">
                                <button><a href="https://wa.me/77758281024">купить</a></button>
                                <button><a href="https://wa.me/77758281024"><img src={arrow} alt="" className="arrow" /></a></button>
                            </div>
                        </div>
                    </div>
                    </RevealBottom>
                    <RevealBottom>
                    <div className="card" id="card-5">
                        <div className="card-content">
                            <div className="upper-content">
                                <h1>ЭСФ, СНТ и <br /> виртуальный <br /> склад</h1>
                            </div>
                            <div className="center-content">
                                <p>89,990 KZT</p>
                            </div>
                            <div className="lower-content">
                                <button><a href="https://wa.me/77758281024">купить</a></button>
                                <button><a href="https://wa.me/77758281024"><img src={arrow} alt="" className="arrow" /></a></button>
                            </div>
                        </div>
                    </div>
                    </RevealBottom>
                    <RevealBottom>
                    <div className="card" id="card-4">
                        <div className="card-content">
                            <div className="upper-content">
                                <h1>Всеобщее <br /> декларирование c <br /> кейсами</h1>
                            </div>
                            <div className="center-content">
                                <p>99, 999 KZT</p>
                            </div>
                            <div className="lower-content">
                                <button><a href="https://wa.me/77758281024">купить</a></button>
                                <button><a href="https://wa.me/77758281024"><img src={arrow} alt="" className="arrow" /></a></button>
                            </div>
                        </div>
                    </div>
                    </RevealBottom>
                    <RevealBottom>
                    <div className="card" id="card-1">
                        <div className="card-content">
                            <div className="upper-content">
                                <h1>Всеобщее <br /> декларирование</h1>
                            </div>
                            <div className="center-content">
                                <p>19,990 KZT</p>
                            </div>
                            <div className="lower-content">
                                <button><a href="https://wa.me/77758281024">купить</a></button>
                                <button><a href="https://wa.me/77758281024"><img src={arrow} alt="" className="arrow" /></a></button>
                            </div>
                        </div>
                    </div>
                    </RevealBottom>
                    <RevealBottom>
                    <div className="card" id="card-3">
                        <div className="card-content">
                            <div className="upper-content">
                                <h1>Онлайн  помощник <br /> бухгалтера </h1>
                            </div>
                            <div className="center-content">
                                <p>99,990 KZT </p>
                            </div>
                            <div className="lower-content">
                                <button><a href="https://wa.me/77758281024">купить</a></button>
                                <button><a href="https://wa.me/77758281024"><img src={arrow} alt="" className="arrow" /></a></button>
                            </div>
                        </div>
                    </div>
                    </RevealBottom>
                    <RevealBottom>
                    <div className="card" id="card-2">
                        <div className="card-content">
                            <div className="upper-content">
                                <h1>Снт, Эсф, <br /> Виртуальный <br /> склад  </h1>
                            </div>
                            <div className="center-content">
                                <p>21,990 KZT </p>
                            </div>
                            <div className="lower-content">
                                <button><a href="https://wa.me/77758281024">купить</a></button>
                                <button><a href="https://wa.me/77758281024"><img src={arrow} alt="" className="arrow" /></a></button>
                            </div>
                        </div>
                    </div>
                    </RevealBottom>
                    <RevealBottom>
                    <div className="card" id="card-5">
                        <div className="card-content">
                            <div className="upper-content">
                                <h1>Форма 913, 200, <br /> Розничный налог, <br /> ОНЛАЙН кассовый <br /> аппарат </h1>
                            </div>
                            <div className="center-content">
                                <p>14,990 KZT </p>
                            </div>
                            <div className="lower-content">
                                <button><a href="https://wa.me/77758281024">купить</a></button>
                                <button><a href="https://wa.me/77758281024"><img src={arrow} alt="" className="arrow" /></a></button>
                            </div>
                        </div>
                    </div>
                    </RevealBottom>
                    <RevealBottom>
                    <div className="card" id="card-1">
                        <div className="card-content">
                            <div className="upper-content">
                                <h1>Форма 101, 04 <br />
                                для иностранцев </h1>
                            </div>
                            <div className="center-content">
                                <p>49,990 KZT </p>
                            </div>
                            <div className="lower-content">
                                <button><a href="https://wa.me/77758281024">купить</a></button>
                                <button><a href="https://wa.me/77758281024"><img src={arrow} alt="" className="arrow" /></a></button>
                            </div>
                        </div>
                    </div>
                    </RevealBottom>
                    <RevealBottom>
                    <div className="card" id="card-2">
                        <div className="card-content">
                            <div className="upper-content">
                                <h1>1с 8 
                                 </h1>
                            </div>
                            <div className="center-content">
                                <p>39,990  KZT </p>
                            </div>
                            <div className="lower-content">
                                <button><a href="https://wa.me/77758281024">купить</a></button>
                                <button><a href="https://wa.me/77758281024"><img src={arrow} alt="" className="arrow" /></a></button>
                            </div>
                        </div>
                    </div>
                    </RevealBottom>
                    <RevealBottom>
                    <div className="card" id="card-3">
                        <div className="card-content">
                            <div className="upper-content">
                                <h1>Бухгалтер <br /> производство <br />
                                 (Бухгалтер <br /> общепита) 
                                 </h1>
                            </div>
                            <div className="center-content">
                                <p>199,990   KZT </p>
                            </div>
                            <div className="lower-content">
                                <button><a href="https://wa.me/77758281024">купить</a></button>
                                <button><a href="https://wa.me/77758281024"><img src={arrow} alt="" className="arrow" /></a></button>
                            </div>
                        </div>
                    </div>
                    </RevealBottom>
                    <RevealBottom>
                    <div className="card" id="card-4">
                        <div className="card-content">
                            <div className="upper-content">
                                <h1>Бухгалтер <br /> Мебельного цеха  
                                 </h1>
                            </div>
                            <div className="center-content">
                                <p>159,990   KZT </p>
                            </div>
                            <div className="lower-content">
                                <button><a href="https://wa.me/77758281024">купить</a></button>
                                <button><a href="https://wa.me/77758281024"><img src={arrow} alt="" className="arrow" /></a></button>
                            </div>
                        </div>
                    </div>
                    </RevealBottom>
                    <RevealBottom>
                    <div className="card" id="card-6">
                        <div className="card-content">
                            <div className="upper-content">
                                <h1>
                                 </h1>
                            </div>
                            <div className="center-content">
                                <p>Консультация с экспертом</p>
                            </div>
                        </div>
                    </div>
                    </RevealBottom>
                </div>
            </div>
            <div className="mobile-container">

            </div>
        </div>
    )
}
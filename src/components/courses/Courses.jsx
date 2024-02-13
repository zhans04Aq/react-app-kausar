import React from "react";

import './courses.scss'

export default function Courses(){
    return(
        <div className="courses">
            <div className="desktop-container">
                <h1 className="title-primary">Выбери свои курсы</h1>
                <div className="card-container">
                    <div className="card" id="card-1">
                        <div className="card-content">
                            <div className="upper-content">
                                <h1>Главный <br />
                                бухгалтер</h1>
                                <p> 1 месяц </p>
                            </div>
                            <div className="center-content">
                                <div className="course-type" id="group">
                                    <p>70 000 KZT</p>
                                    <p>в группе</p>
                                </div>
                                <div className="course-type" id="solo">
                                    <p>100 000 KZT</p>
                                    <p>индивидуально</p>
                                </div>
                            </div>
                            <div className="lower-content">
                                <button><a href="https://wa.me/77758281024">купить</a></button>
                                <button><a href="https://wa.me/77758281024">-></a></button>
                            </div>
                        </div>
                    </div>
                    <div className="card" id="card-2">
                        <div className="card-content">
                        <div className="upper-content">
                            <h1>Бухгалтер от азов <br /> до баланса</h1>
                            <p> 1 месяц </p>
                        </div>
                        <div className="center-content">
                            <div className="course-type" id="group">
                                <p>60 000 KZT</p>
                                <p>в группе</p>
                            </div>
                            <div className="course-type" id="solo">
                                <p>90 000 KZT</p>
                                <p>индивидуально</p>
                            </div>
                        </div>
                        <div className="lower-content">
                            <button><a href="https://wa.me/77758281024">купить</a></button>
                            <button><a href="https://wa.me/77758281024">-></a></button>
                        </div>
                        </div>
                    </div>
                    <div className="card" id="card-3">
                        <div className="card-content">
                        <div className="upper-content">
                            <h1>Бухгалтер <br /> для ИП</h1>
                            <p> 1 месяц </p>
                        </div>
                        <div className="center-content">
                            <div className="course-type" id="group">
                                <p>70 000 KZT</p>
                                <p>в группе</p>
                            </div>
                            <div className="course-type" id="solo">
                                <p>100 000 KZT</p>
                                <p>индивидуально</p>
                            </div>
                        </div>
                        <div className="lower-content">
                            <button><a href="https://wa.me/77758281024">купить</a></button>
                            <button><a href="https://wa.me/77758281024">-></a></button>
                        </div>
                        </div>
                    </div>
                    <div className="card" id="card-4">
                        <div className="card-content">
                        <div className="upper-content">
                            <h1>Всеобщее <br /> декларирование</h1>
                            <p> 1 месяц </p>
                        </div>
                        <div className="center-content">
                            <div className="course-type" id="group">
                                <p>70 000 KZT</p>
                                <p>в группе</p>
                            </div>
                            <div className="course-type" id="solo">
                                <p>100 000 KZT</p>
                                <p>индивидуально</p>
                            </div>
                        </div>
                        <div className="lower-content">
                            <button><a href="https://wa.me/77758281024">купить</a></button>
                            <button><a href="https://wa.me/77758281024">-></a></button>
                        </div>
                        </div>
                    </div>
                    <div className="card" id="card-5">
                        <div className="card-content">
                        <div className="upper-content">
                            <h1>ЭСФ, СНТ И <br /> ВИРТУАЛЬНЫЙ <br /> СКЛАД</h1>
                            <p> 1 месяц </p>
                        </div>
                        <div className="center-content">
                            <div className="course-type" id="group">
                                <p>70 000 KZT</p>
                                <p>в группе</p>
                            </div>
                            <div className="course-type" id="solo">
                                <p>100 000 KZT</p>
                                <p>индивидуально</p>
                            </div>
                        </div>
                        <div className="lower-content">
                            <button><a href="https://wa.me/77758281024">купить</a></button>
                            <button><a href="https://wa.me/77758281024">-></a></button>
                        </div>
                        </div>
                    </div>
                    <div className="card" id="card-6">
                        <div className="card-content">
                        <div className="upper-content">
                            <h1>СНР <br /> “РОЗНИЧНЫЙ <br />  НАЛОГ”</h1>
                            <p> 1 месяц </p>
                        </div>
                        <div className="center-content">
                            <div className="course-type" id="group">
                                <p>70 000 KZT</p>
                                <p>в группе</p>
                            </div>
                            <div className="course-type" id="solo">
                                <p>100 000 KZT</p>
                                <p>индивидуально</p>
                            </div>
                        </div>
                        <div className="lower-content">
                            <button><a href="https://wa.me/77758281024">купить</a></button>
                            <button><a href="https://wa.me/77758281024">-></a></button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-container">

            </div>
        </div>
    )
}
import React from "react";

import './courses.scss'

import arrow from '../../assets/icons/courses-icons/arrow-sm-right-svgrepo-com.svg'

export default function Courses(){
    return(
        <div className="courses">
            <div className="desktop-container">
                <h1 className="title-primary">Выбери свои курсы</h1>
                <div className="card-container">
                    <div className="card" id="card-1">
                        <div className="card-content">
                            <div className="upper-content">
                                <h1>Форма <br /> 910, ЭСФ</h1>
                            </div>
                            <div className="center-content">
                                <p>70 000 KZT</p>
                            </div>
                            <div className="lower-content">
                                <button><a href="https://wa.me/77758281024">купить</a></button>
                                <button><a href="https://wa.me/77758281024"><img src={arrow} alt="" className="arrow" /></a></button>
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
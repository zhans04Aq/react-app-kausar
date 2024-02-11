import React from "react";

import './statistics.scss'

import graphEl from '../../assets/img/statistics-graph-el.svg'

import circleStatisticsPulse from '../../assets/img/circle-statistics.svg'

export default function Statistics (){
    return(
        <div className="statistics">
            <div className="dekstop-statistics">
                <h1>Мы в цифрах</h1>
                <img src={graphEl} alt="" className="graph-element" />
                <div className="statistics-content">
                    <div className="content-item">
                        <img src={circleStatisticsPulse} alt="" />
                        <h3>1200</h3>
                        <p>человек стали <br /> бухгалтерами и повысили <br />квалификацию</p>
                    </div>
                    <div className="content-item">
                        <img src={circleStatisticsPulse} alt="" />
                        <h3>8</h3>
                        <p>лет работы <br /> на рынке</p>
                    </div>
                    <div className="content-item">
                        <img src={circleStatisticsPulse} alt="" />
                        <h3>99%</h3>
                        <p>трудоустроились в <br /> течении месяца</p>
                    </div>
                </div>
            </div>
            <div className="mobile-statistics"></div>
        </div>
    )
}
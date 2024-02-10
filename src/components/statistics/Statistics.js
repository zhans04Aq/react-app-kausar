import React from "react";

import './statistics.scss'

import graphEl from '../../assets/img/statistics-graph-el.svg'

import circleStatisticsPulse from '../../assets/img/circle-statistics.png'

export default function Statistics (){
    return(
        <div className="statistics">
            <div className="dekstop-statistics">
                <h1>Мы в цифрах</h1>
                <img src={graphEl} alt="" className="graph-element" />
                <div className="statistics-content">
                    <div className="content-item">
                        <img src={circleStatisticsPulse} alt="" />
                        <p></p>
                    </div>

                </div>
            </div>
            <div className="mobile-statistics"></div>
        </div>
    )
}
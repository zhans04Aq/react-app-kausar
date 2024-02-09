import React from "react";

import './statistics.scss'

import graphEl from '../../assets/img/statistics-graph-el.svg'
import graphElp from '../../assets/img/statistics-graph-el.png'

export default function Statistics (){
    return(
        <div className="statistics">
            <div className="dekstop-statistics">
                <h1>Мы в цифрах</h1>
                <img src={graphElp} alt="" className="graph-element" />
                <div className="statistics-content">
                    <div className="content-item">
                        <div className="pulse">
                            <h2>1200</h2>
                        </div>
                        <p></p>
                    </div>
                    <div className="content-item">
                        <div className="pulse">
                            <h2>8</h2>
                        </div>
                        <p></p>
                    </div>
                    <div className="content-item">
                        <div className="pulse">
                            <h2>99%</h2>
                        </div>
                        <p></p>
                    </div>
                </div>
            </div>
            <div className="mobile-statistics"></div>
        </div>
    )
}
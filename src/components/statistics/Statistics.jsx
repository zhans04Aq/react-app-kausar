import React from "react";

import './statistics.scss'

import graphEl from '../../assets/img/statistics-graph-el.svg'

import Reveal from "../animations/Reveal";
import RevealBottom from "../animations/RevealBottom";

export default function Statistics (){
    return(
        <div className="statistics">


            <div className="dekstop-statistics">

                <Reveal direction={"left"}>
                  <h1 className="title-primary">Мы в цифрах</h1>
                </Reveal>
                
                <div className="statistics-content" style={{backgroundImage: `url(${graphEl})`}}>
                  <div className="container">
                    <ul className="stat-list">
                      <RevealBottom>
                        <li>
                            <div className="circle">
                              1200
                            </div>
                            <p>человек стали <br /> бухгалтерами и повысили<br /> квалификацию</p>
                        </li>
                      </RevealBottom>
                      <RevealBottom>
                        <li>
                          <div className="circle">
                            8
                          </div>
                          <p>лет работы на рынке</p>
                        </li>
                      </RevealBottom>
                      <RevealBottom>
                        <li>
                          <div className="circle">
                            99%
                          </div>
                          <p>трудоустроились в течении месяца</p>
                        </li>
                      </RevealBottom>
                    </ul>
                  </div>
                </div>
            </div>
            
            
          
        </div>
    )
}
import React from "react";

import './header.scss'

import graphEl from '../../assets/img/header-graph-el.svg'
import gradientBg from "../../assets/img/header-gradient-bg.png"

const Header = () =>{
    return(
        <header 
          style={{backgroundImage: `url(${gradientBg})`}}
        >
            
            <div className="graph" style={{backgroundImage: `url(${graphEl})`}}>
              <div className="header-content">
                  <h1>Обучим професии ‘Бухгалтер’ с нуля!</h1>
                  <p>Пройдите полную подготовку в <span> Kausar <br />
                  Business Consulting</span> и станьте <br />  специалистом Бухгалтером! </p>
                  <div className="button-container">
                      <button>Записаться</button>
                  </div>
              </div>
            </div>
        </header>
    )
}

export default Header
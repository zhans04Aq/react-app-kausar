import React from "react";

import './header.scss'

import graphEl from '../../assets/img/header-graph-el.svg'

const Header = () =>{
    return(
        <header>
            <img src={graphEl} alt="" className="header-graph-el" />
            <div className="header-content">
                <h1>Обучим професии ‘Бухгалтер’ с нуля!</h1>
                <p>Пройдите полную подготовку в <span>Kausar <br /> Business Consulting</span> и станьте специалистом <br /> Бухгалтер! </p>
                <div className="button-container">
                    <button>Записаться</button>
                </div>
            </div>
        </header>
    )
}

export default Header
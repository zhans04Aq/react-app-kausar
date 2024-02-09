/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";

import './benefits.scss'

import '../../assets/WOW/css/libs/animate.css'

// new WOW().init();

export default function Benefits(){
    return(
        <div className="benefits wow">
            <div className="component-title">
                <h1>В чем наши преимущества?</h1>
                <div className="scroller wow">
                    <div className="scroller-wrapper wow">
                        <div className="scroller-item" >богатый опыт</div>
                        <div id="long-word-item" className="scroller-item">подготовка к 1C 8.3</div>
                        <div className="scroller-item" >практическое обучение </div>
                        <div id="long-word-item" className="scroller-item">индивидуальный подход </div>
                        <div className="scroller-item">обучение у нас.. </div>
                    </div>
                </div>
            </div>
            <div className="benefits-cards">
                <div className="card"
                ></div>
            </div>
        </div>
    )
}

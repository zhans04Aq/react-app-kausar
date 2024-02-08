import React from "react";

import './benefits.scss'

export default function Benefits(){
    return(
        <div className="benefits">
            <div className="component-title">
                <h1>В чем наши преимущества?</h1>
                <div className="scroller">
                    <div className="scroller-wrapper">
                        <div className="scroller-item">богатый опыт</div>
                        <div id="long-word-item" className="scroller-item">подготовка к 1C 8.3</div>
                        <div className="scroller-item" id="long-word-item">практическое обучение </div>
                        <div id="long-word-item" className="scroller-item" id="long-word-item">индивидуальный подход </div>
                        <div className="scroller-item">обучение у нас.. </div>
                        <div className="scroller-item">богатый опыт</div>
                        <div id="long-word-item" className="scroller-item">подготовка к 1C 8.3</div>
                        <div className="scroller-item" id="long-word-item">практическое обучение </div>
                        <div id="long-word-item" className="scroller-item" id="long-word-item">индивидуальный подход </div>
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

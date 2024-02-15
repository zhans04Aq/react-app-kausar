import React from "react";
import {motion} from "framer-motion"

import './header.scss'

import graphEl from '../../assets/img/header-graph-el.svg'
import gradientBg from "../../assets/img/header-gradient-bg.png"

const animation = {
  hidden: {
    x: -200,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: "0.5s"
  }
}

const Header = () =>{
    return(
        <motion.header 
          initial="hidden"
          whileInView="visible"
          style={{backgroundImage: `url(${gradientBg})`}}
        >
            
            <div className="graph" style={{backgroundImage: `url(${graphEl})`}}>
              <motion.div variants={animation} className="header-content">
                  <h1>Обучим професии ‘Бухгалтер’ с нуля!</h1>
                  <p>Пройдите полную подготовку в <span> Kausar <br />
                  Business Consulting</span> и станьте специалистом <br /> Бухгалтером! </p>
                  <div className="button-container">
                      <button>Записаться</button>
                  </div>
              </motion.div>
            </div>
        </motion.header>
    )
}

export default Header
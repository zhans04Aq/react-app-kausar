import React from 'react'
import "./consultation.scss"

import consultationBg from "../../assets/img/consultation-bg.png"

import RevealBottom from '../animations/RevealBottom'
import Reveal from '../animations/Reveal'

export default function Consultation() {

  const handleSubmit = () => {

  }

  return (
    <div className='consultation' style={{backgroundImage: `url(${consultationBg})`}}>

      <div className='container'>
        <RevealBottom>
          <form onSubmit={handleSubmit}>
            <div className='form-head'>
              <Reveal direction={"left"}>
                <h1>Консультация</h1>
              </Reveal>
              <Reveal direction={"right"}>
                <p>Оставьте свои контактные данные и мы с вами свяжемся.</p>
              </Reveal>
            </div>
            <div className="form-body">
              <Reveal direction={"left"}>
                <input type="text" placeholder='Имя'/>
              </Reveal >
              <Reveal direction={"right"}>
                <input type="tel" placeholder='Телефон'/>
              </Reveal >
              <Reveal direction={"left"}>
                <button>Отправить заявку</button>
              </Reveal >
            </div>
          </form>
        </RevealBottom>
      </div>
    </div>
  )
}

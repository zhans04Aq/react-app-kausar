import React from 'react'
import "./footer.scss"

import visaLogo from "../../assets/img/visaLogo.png"
import masterCardLogo from "../../assets/img/masterCardLogo.png"
import logo from "../../assets/icons/logo-kausar.png"

export default function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='footer-top'>
          <img src={visaLogo}/>
          <img src={masterCardLogo}/>
          <img className='logo' src={logo}/>
        </div>
        <div className='footer-body'>
          <div className='body-info'>
            <h1>Все права защищены ©</h1>
            <p>ТОО «Kausar Business Consulting»</p>
            <p>БИН 150840022633</p>
            <p>Юридический адресс: г. Алматы, Алмалинский район, ул. Гоголя, 86, офис 217</p>
            <p>09:00 - 20:00, пн - пт</p>
          </div>
          <img className='logo-pc' src={logo}/>
        </div>
      </div>
    </footer>
  )
}

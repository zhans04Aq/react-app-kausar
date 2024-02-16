/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";

import './navbar.scss'
// import '../../assets/hamburgers/dist/hamburgers.css'

// img import 
import logoPng from '../../assets/icons/logo-kausar.png'
import instaIcon from '../../assets/icons/instagram-icon.png'
import whatsappIcon from '../../assets/icons/whatsapp-icon.png'
// img import 



const Navbar = () =>{
    const [clicked, setClicked] = useState(false)


    const clickHandler=()=>{
        setClicked(prev=> !prev)
    }


    return(
        <nav>
          <div className="container">
            <div className="desktop-container">
              <img src={logoPng} alt="" className="logo" />
              
              <div className="action">

                <ul className="soc-media">
                  <li>
                    <a href="https://www.instagram.com/kausar_consulting?igsh=MXI5cWd5bHdjaWZvbA==">
                      <img src={instaIcon} alt="" />
                    </a>
                  </li>
                </ul>

                <button onClick={clickHandler} className="burger">
                  <span className={clicked ? "first-active" : ""}></span>
                  <span className={clicked ? "middle-active" : ""}></span>
                  <span className={clicked ? "last-active" : ""}></span>
                </button>
              </div>
            </div>
          </div>
          

            <ul className={`nav-bar ${clicked ? "active" : ""}`}>
              <li>
                <a href="#about-us">
                  О нас
                </a>
              </li>
              <li>
              
                <a href="#courses">
                  Курсы
                </a>
              </li>
              <li>
                <a href="#contacts">
                  Контакты и адрес
                </a>
              </li>
              <li>
                <a href="#consultation">
                  Консультация
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kausar_consulting?igsh=MXI5cWd5bHdjaWZvbA==">
                  Инстаграм
                </a>
              </li>
            </ul>
        </nav>
    )
}
export default Navbar
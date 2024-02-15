/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import {motion} from "framer-motion"

import './navbar.scss'
// import '../../assets/hamburgers/dist/hamburgers.css'

// img import 
import logoPng from '../../assets/icons/logo-kausar.png'
import instaIcon from '../../assets/icons/instagram-icon.png'
import whatsappIcon from '../../assets/icons/whatsapp-icon.png'
// img import 


const animation = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: "1s"
  }
}

const Navbar = () =>{
    const [clicked, setClicked] = useState(false)


    const clickHandler=()=>{
        setClicked(prev=> !prev)
    }


    return(
        <motion.nav
          initial="hidden"
          whileInView="visible"
          variants={animation}
        >
          <div className="container">
            <div className="desktop-container">
              <img src={logoPng} alt="" className="logo" />
              
              <div className="action">
                <ul className="soc-media">
                  <li>
                    <img src={whatsappIcon} alt="" />
                  </li>
                  <li>
                    <img src={instaIcon} alt="" />
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
                Курс №1
              </li>
              <li>
                Курс №2
              </li>
              <li>
                Курс №3
              </li>
              <li>
                О нас
              </li>
              <li>
                Контакты и адрес
              </li>
            </ul>
        </motion.nav>
    )
}
export default Navbar
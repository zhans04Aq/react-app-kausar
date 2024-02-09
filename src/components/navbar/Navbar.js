/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";

import './navbar.scss'
import '../../assets/hamburgers/dist/hamburgers.css'

// img import 
import logoPng from '../../assets/icons/logo-kausar.png'
// img import 


const Navbar = ({isActive}) =>{
    const [clicked, setClicked] = useState(isActive)

    const cls = ['hamburger hamburger--3dxy']
    const menuCls = ['menu']

    const clickHandler=()=>{
        setClicked(!clicked)
    }

    if(clicked){
        cls.push('is-active')
        menuCls.push('active')
    }



    return(
        <nav>
            <div className="desktop-container">
                <img src={logoPng} alt="" className="logo" />
                <div className="burger-menu">
                    <div className={menuCls.join(' ')}>
                        <div>
                            <a >Курс №1</a>
                            <a >Курс №2</a>
                            <a >Курс №3</a>
                            <a >Наши Курсы</a>
                            <a >Контакты и адресс</a>
                        </div>
                    </div>
                    <button onClick={()=>clickHandler()} class={cls.join(' ')} type="button">
                        <span  class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
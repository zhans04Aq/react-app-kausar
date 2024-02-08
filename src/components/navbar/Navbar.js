import React from "react";

import './navbar.scss'

// img import 
import burgerMenu from '../../assets/icons/burger-menu.svg'
import logoPng from '../../assets/icons/logo-kausar.png'
// img import 


const Navbar = () =>{
    return(
        <nav>
            <img src={logoPng} alt="" className="logo" />
            <div className="burger-menu">
                <img src={burgerMenu} alt="" />
            </div>
        </nav>
    )
}

export default Navbar
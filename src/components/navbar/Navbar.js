import React, {useState} from "react";

import './navbar.scss'
import '../../assets/hamburgers/dist/hamburgers.css'

// img import 
import logoPng from '../../assets/icons/logo-kausar.png'
// img import 


const Navbar = ({isActive}) =>{
    const [clicked, setClicked] = useState(isActive)

    const cls = ['hamburger hamburger--3dxy']

    const clickHandler=()=>{
        setClicked(!clicked)
    }

    if(clicked){
        cls.push('is-active')
    }

    return(
        <nav>
            <img src={logoPng} alt="" className="logo" />
            <button onClick={()=>clickHandler()} class={cls.join(' ')} type="button">
                <span  class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </nav>
    )
}
export default Navbar
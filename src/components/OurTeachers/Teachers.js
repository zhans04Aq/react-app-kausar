import React from 'react'
import "./teachers.scss"

import teacherIcon from "../../assets/icons/teachersPreIcon.png"

export default function Teachers () {
  return (
    <div className='teachers'>
      <div className='desktop-container'>
        <h1 className='title'>Наши преподаватели</h1>
        <ul className='teachers-list'>
          <li className='teacher-card'>
            <img src={teacherIcon} alt='Туриспаев Ержан Молдагалиевич'/>
            <p>
              Туриспаев Ержан Молдагалиевич
            </p>
            <span>
              преподаватель
            </span>
          </li>
          <li className='teacher-card'>
            <img src={teacherIcon} alt='Туриспаев Ержан Молдагалиевич'/>
            <p>
              Байгазинова Дана Кыдырбековна
            </p>
            <span>
              преподаватель
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

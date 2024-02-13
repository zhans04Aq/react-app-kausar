import React from 'react'
import "./teachers.scss"

import BaygzinovnaImg from "../../assets/img/BaygazinovaImg.png"
import TurispaevImg from "../../assets/img/TurispaevImg.png"
import TurymbetImg from "../../assets/img/TurymbetImg.png"

export default function Teachers () {
  return (
    <div className='teachers'>
      <div className='container'>
        {/* <h1 className='title'>Наши преподаватели</h1> */}
        <ul className='teachers-list'>
          <li className='teacher-card'>
            <img src={BaygzinovnaImg} alt='Туриспаев Ержан Молдагалиевич'/>
            <h1>
              Байгазинова Дана Кыдырбековна
            </h1>
            <span>
              преподаватель
            </span>
            <p>Магистр экономических наук Действующий бухгалтер</p>
          </li>
          <li className='teacher-card'>
            <img src={TurispaevImg} alt='Туриспаев Ержан Молдагалиевич'/>
            <h1>
              Туриспаев Ержан Молдагалиевич
            </h1>
            <span>
              Директор
            </span>
            <p>
              Бизнес-тренер в области<br/>финансового и<br/>управленческого учета<br/>
              Сертификат профессионального бухгалтера РК<br/>
              Магистр экономических наук
            </p>
          </li>
          <li className='teacher-card'>
            <img src={TurymbetImg} alt='Туриспаев Ержан Молдагалиевич'/>
            <h1>
              Турымбет Салтанат Оспанкызы
            </h1>
            <span>
              преподаватель
            </span>
            <p>
              Главный бухгалтер в ТОО<br/>
              Интеркомп аутсорсинг-Казахстан Магистр экономических наук<br/>
              Имею сертификат Профессионального бухгалтера РК
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

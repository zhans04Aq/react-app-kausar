import React from 'react'

import './pros.scss'

import profesionalsIcon from '../../assets/icons/pros-icons/Profesionals.svg'
import AvailabilityIcon from '../../assets/icons/pros-icons/Availability.svg'
import LearningIcon from '../../assets/icons/pros-icons/Learning-methods.svg'
import InformationIcon from '../../assets/icons/pros-icons//Information.svg'
import SertificatIcon from '../../assets/icons/pros-icons/Sertificat.svg'
import CareerIcons from '../../assets/icons/pros-icons/Career.svg'

export const Pros = () => {
    return(
        <div className="pros">
            <div className="container">
            <div className="pros-desktop-container">
                <div className="title">
                    <h1 className='title-primary'>Почему стоит выбрать нас?</h1>
                    <p>99% наших учеников показали результаты и<br />трудоустроились <span>в течении месяца.</span></p>
                </div>
                <div className="pros-content">
                    <div className="row-content">
                        <div className="card">
                            <img src={profesionalsIcon} alt="" className="icon" />
                            <h1>Профессионалы</h1>
                            <p>Только <br /> сертифицированные <br /> преподаватели, <br /> бухгалтеры-практики.</p>
                        </div>
                        <div className="card">
                            <img src={AvailabilityIcon} alt="" className="icon" />
                            <h1>Доступные цены</h1>
                            <p>
                            Качественное <br /> обучение по ценам <br /> ниже, чем у <br /> конкурентов.
                            </p>
                        </div>
                        <div className="card">
                            <img src={LearningIcon} alt="" className="icon" />
                            <h1>Методика обучения</h1>
                            <p>
                            80% практики + 20% <br /> теории, с применением <br />
                            требований МСФО <br /> (IFRS) для МСБ и 1С <br />Бухгалтерия 8.3.
                            </p>
                        </div>
                        <div className="card">
                            <img src={InformationIcon} alt="" className="icon" />
                            <h1>Необходимая информация</h1>
                            <p>Только <br /> сертифицированные <br /> преподаватели, <br /> бухгалтеры-практики.
                            </p>
                        </div>
                        <div className="card">
                            <img src={SertificatIcon} alt="" className="icon" />
                            <h1>Сертификат</h1>
                            <p>
                            После окончания <br /> обучение - Вы <br /> получаете сертификат, <br /> который очень <br /> цениться при <br /> устройстве на работу.
                            </p>
                        </div>
                        <div className="card">
                            <img src={CareerIcons} alt="" className="icon" />
                            <h1>Карьерный рост</h1>
                            <p>
                            Большинство наших <br /> выпускников сразу <br /> после курса <br /> трудоустраиваются, <br /> становятся главными <br /> бухгалтерами.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pros-mobile-container"></div>
            </div>
        </div>
    )
}

export default Pros
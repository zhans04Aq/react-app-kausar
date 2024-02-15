import {useState, React} from 'react'
import "./consultation.scss"

import consultationBg from "../../assets/img/consultation-bg.png"


export default function Consultation() {

  const [name, setName] = useState('')
  const handleSubmit = (event) => {
    
    event.preventDefault();
    let message = `Меня зовут - ${name}. Проконсультируете меня?`
    window.location.href=`https://wa.me/77774345295?text=${encodeURIComponent(message)}`
  }

  return (
    <div className='consultation' style={{backgroundImage: `url(${consultationBg})`}}>

      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='form-head'>
            <h1>Консультация</h1>
            <p>Оставьте свои контактные данные и мы с вами свяжемся.</p>
          </div>
          <div className="form-body">
            <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Имя'/>
            <input type="tel" placeholder='Телефон'/>
            <button>Отправить заявку</button>
          </div>
        </form>
      </div>
    </div>
  )
}

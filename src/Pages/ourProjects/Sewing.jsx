import React, { useEffect, useState } from 'react'
import SewingImg from '../../img/sewingImg.png'
import axios from 'axios'
import { API_PATH } from '../../tools/constants'
// import SewingImg2 from '../../img/sewingImg2.png'
// import SewingImg3 from '../../img/sewingImg3.png'
// import SewingImg4 from '../../img/sewingImg4.png'
// import SewingImg5 from '../../img/sewingImg5.png'
// import SewingImg6 from '../../img/sewingImg6.png'
// import SewingImg7 from '../../img/sewingImg7.png'
// import SewingImg8 from '../../img/sewingImg8.png'
// import SewingImg9 from '../../img/sewingImg9.png'
// import SewingImg10 from '../../img/sewingImg10.png'

export default function Sewing() {
  const [id,setId] = useState(JSON.parse(localStorage.getItem('PROJECTS') || ''))
  const [project,setProject] = useState([])

  const getproject = () =>{
    axios.get(API_PATH + `main/project/?cat=${id}`)
    .then((res)=>{
      setProject(res.data)
    })
  }

  useEffect(() =>{
    getproject();
  },[])

  return (
    <>
      <section id='sewingSection'>
        <div className="container">
        {project && project.map((item,index) =>{
          return(
          <div key={index} data-aos="fade-up" className='sewingContent'>
            <div data-aos="fade-up" className='sewingInfo'>
              <h2 data-aos="fade-up">{item.name}</h2>
              <p data-aos="fade-up">{item.description}</p>
              <hr className='sewingHr' />
              <h3 data-aos="fade-up">кв.м: <span>{item.kvm} м2</span></h3>
              <hr className='sewingHr' />
              <h3 data-aos="fade-up">Тип:<span>{item.type}</span></h3>
              <hr className='sewingHr' />
              <h3 data-aos="fade-up">Местонахождение:<span>{item.location}</span></h3>
              <hr className='sewingHr' />
              <h3 data-aos="fade-up">Дата Релиза:<span>{item.date}</span></h3>
              <hr className='sewingHr' />
            </div>
            <img data-aos="fade-up" src={item.image} alt="..." />
          </div>
          )
        })}
          


          {/* <div className='sewingImg' data-aos="fade-up">
            <img data-aos="fade-up" src={SewingImg2} alt="..." />
            <p data-aos="fade-up">Учитывая желание клиента, Дизайн проект квартиры разработан в современном стиле, где также присутствуют элементы неоклассики. Главным пожеланием заказчика было максимально уютное и функциональное пространство с яркими элементами.</p>
          </div>

          <div className='sewingContent2' data-aos="fade-up">
            <div className='sewingInfo2'>
              <img data-aos="fade-up" src={SewingImg3} alt="..." />
              <img data-aos="fade-up" src={SewingImg4} alt="..." />
            </div>
            <p data-aos="fade-up">Стиль неоклассика в интерьере это универсальное сочетание благородства и возвышенной утонченности с современными материалами и актуальными дизайнерскими идеями. Этот стиль являет собой интерпретацию классических традиций в оформлении жилого пространства, на современный лад.</p>
          </div>

          <div className='sewingContent3' data-aos="fade-up">
            <img data-aos="fade-up" className='sewingImg5' src={SewingImg5} alt="..." />
            <img data-aos="fade-up" className='sewingImg5' src={SewingImg6} alt="..." />
            <div data-aos="fade-up" className='sewingInfo3'>
              <img data-aos="fade-up" src={SewingImg7} alt="..." />
              <img data-aos="fade-up" src={SewingImg8} alt="..." />
            </div>
              <p data-aos="fade-up">При реализации подобного стилистического направления большую роль играют предметы мебели. Модель для подобных холлов должна быть украшена позолотой и резьбой. В качестве декора выступают мрамор, бронзовые накладки. </p>
          </div>

          <div className='sewingContent4'>
            <div className='sewingInfo4'>
              <img src={SewingImg9} alt="..." />
              <img src={SewingImg10} alt="..." />
            </div>
            <p>Резная позолота подходит для украшения рамок для зеркал. Особенно если площадь небольшая отличнымрешением станет большое зеркало. Оно помогает зрительно расширить границы комнаты, наполнить ее светом и простором.</p>
          </div> */}
        </div>
      </section>
    </>
  )
}

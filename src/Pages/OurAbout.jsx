import React, { useEffect, useState } from 'react'
import aboutImg1 from '../img/aboutImg1.png'
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { API_PATH } from '../tools/constants';
    
export default function OurAbout() {
  const { t } = useTranslation();
  const [about,setAbout] = useState([])
  const [team,setTeam] = useState([])

  const getAbout = () =>{
    axios.get(API_PATH + 'main/about/')
      .then((res) =>{
        setAbout(res.data[0])
      })
  }

  const getTeam = () =>{
    axios.get(API_PATH + 'main/team/')
      .then((res) =>{
        setTeam(res.data)
      })
  }
  useEffect(() => {
    getTeam();
    getAbout();
  },[])

  return (
    <>
      <section id='ourTeam1'>
        <div className="container">
          <div className='ourAboutContent'>
            <h2 data-aos="fade-up">{t('ourAboutUs')}</h2>
            {/* <p data-aos="fade-up">{t('ourAboutUsText')}</p> */}
            <p data-aos="fade-up">{about ? about.text : t('ourAboutUsText')}</p>
          </div>
          <div className='ourRectangle' data-aos="fade-up"></div>
          {team && team.map((item,index) =>{
            return(
              <div key={index} className={index%2 ==0 ? 'aboutContent rowReverse' : 'aboutContent'}>
              <img data-aos="fade-up" src={item.image} alt="..." />
              <div className='aboutInfo'> 
                <h3 data-aos="fade-up">{item.name}</h3>
                <span data-aos="fade-up">{item.job}</span>
                <p data-aos="fade-up">{item.text}
                </p>
              </div>
            </div>
            )
          })}
         

{/* 
          <div className='aboutContent rowReverse'>
            <img data-aos="fade-up" src={aboutImg1} alt="..." />
            <div data-aos="fade-up" className='aboutInfo rowReverseContent'> 
              <h3 data-aos="fade-up">{t('TeamName')}</h3>
              <span data-aos="fade-up">{t('TeamTask')}</span>
              <p data-aos="fade-up">{t('TeamText')}
              </p>
            </div>
          </div>

          <div className='aboutContent'>
            <img data-aos="fade-up" src={aboutImg1} alt="..." />
            <div className='aboutInfo'> 
              <h3 data-aos="fade-up">{t('TeamName')}</h3>
              <span data-aos="fade-up">{t('TeamTask')}</span>
              <p data-aos="fade-up">{t('TeamText')}
              </p>
            </div>
          </div>

          <div className='aboutContent rowReverse'>
            <img data-aos="fade-up" src={aboutImg1} alt="..." />
            <div className='aboutInfo rowReverseContent'> 
              <h3 data-aos="fade-up">{t('TeamName')}</h3>
              <span data-aos="fade-up">{t('TeamName')}</span>
              <p data-aos="fade-up">{t('TeamText')}
              </p>
            </div>
          </div> */}
        </div>
      </section>
    </>
  )
}

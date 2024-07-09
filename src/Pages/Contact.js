import React, { useEffect, useState } from 'react'
import PatternIcon from '../img/pattern_icon.svg'
import contactPhone from '../img/contactPhone.png'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { API_PATH } from '../tools/constants'

export default function Contact() {
  const { t } = useTranslation()
  const [contact,setContact] = useState([])

  const getContact = () =>{
    axios.get(API_PATH + 'main/contact/')
      .then((res)=>{
        setContact(res.data[0])
      })
  }
  useEffect(()=>{
    getContact();
  },[])

  return (
    <>
      <section id="contact">
        <div className="container">
          <div className='whyUsTitle_content contact'>
            <img data-aos="fade-up" src={PatternIcon} alt="..." />
            <h2 data-aos="fade-up">{t('Contact')}</h2>
            <p data-aos="fade-up">{t('contactText')}</p>
          </div>

          <div className="contactContent d-flex justify-content-between align-items-center">
            <div className="contactInfo">
              <div data-aos="fade-up" className="contactInfoContent">
                <h3>{t('contactNumber')}</h3>
                <span>{contact.phone}</span>
              </div>
              <div data-aos="fade-up" className="contactInfoContent">
                <h3>{t('contactAdress')}</h3>
                <span>{contact.address}</span>
              </div>
              <div data-aos="fade-up" className="contactInfoContent">
                <h3>{t('contactEmail')}</h3>
                <span>{contact.mail}</span>
              </div>
              <div data-aos="fade-up" className="contactInfoContent">
                <h3>{t('contactSocial')}</h3>
                <span>{contact.social_set}</span>
              </div>
            </div>
            <img className="contactPhone" data-aos="fade-up" src={contact.image} alt="..." />
          </div>

          <div className="questions " data-aos="fade-up">
            <h2>{t('contatSavolText')}</h2>
            <span>{t('telRaqamingizniQoldiring')} </span>
            <form action="">
              <div>
                <h2>{t('contactName')}</h2>
                <input type="text" name="name" id="name" placeholder={t('IsmFamiliya')} />
              </div>
              <div>
                <h2>{t('contactPhoneNumber')}</h2>
                <input type="number" name="name" id="name" placeholder="+998 99 663 7000" />
              </div>
              <div>
                <h2>{t('contactQulayVaqt')}</h2>
                <input type="date" name="name" id="name" placeholder="09:41" />
              </div>
            </form>
            <a href="tel:+998993585110">{t('contactCallMe')}</a>
          </div>
        </div>
      </section>
    </>
  )
}

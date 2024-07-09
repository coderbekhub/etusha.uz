import React from 'react'
import Telegram from '../img/telegram.svg'
import Instagram from '../img/instagram.svg'
import FaceBook from '../img/facebook.svg'
import Brand from '../img/brand-removebg.png'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const {t} = useTranslation()
  return (
    <>
      <footer id="footer">
      <section id="footerSection">
        <div className="container">
          <nav className="footerNav d-flex justify-content-between">
            <div data-aos="fade-up" className="footerBrand">
              <img data-aos="fade-up" src={Brand} alt="..." />
              <ul className="socialList d-flex align-items-center">
                <li><a data-aos="fade-up" href="#"><img src={Telegram} alt="..." /></a></li>
                <li><a data-aos="fade-up" href="#"><img src={Instagram} alt="..." /></a></li>
                <li><a data-aos="fade-up" href="#"><img src={FaceBook} alt="..." /></a></li>
              </ul>
            </div>

            <ul data-aos="fade-up" className="footerList">
              <h2 data-aos="fade-up">{t('Home')}</h2>
              <li><a data-aos="fade-up" href="#whyUs_section">{t('NegaBiz')}</a></li>
              <li><a data-aos="fade-up" href="#faq">{t('TSS')}</a></li>
              <li><a data-aos="fade-up" href="#ourProjects">{t('OurProjects')}</a></li>
              <li><a data-aos="fade-up" href="#ourTeam">{t('OurTeam')}</a></li>
              <li><a data-aos="fade-up" href="#contact">{t('Contact')}</a></li>
            </ul>

            <ul data-aos="fade-up" className="footerList">
              <h2 data-aos="fade-up">{t('OurProjects')}</h2>
              <li><a data-aos="fade-up" href="#">ЖК Boulevard</a></li>
              <li><a data-aos="fade-up" href="#">ЗД “Oq Tosh”</a></li>
              <li><a data-aos="fade-up" href="#">ЖК Zenith</a></li>
              <li><a data-aos="fade-up" href="#">{t('OurTeam')}</a></li>
              <li><a data-aos="fade-up" href="#">ЖК Darkhan</a></li>
            </ul>

            <ul data-aos="fade-up" className="footerList contact_info">
              <h2 data-aos="fade-up">{t('Contact')}</h2>
              <li><a data-aos="fade-up" href="tel:+998 99 663 70 00">+998 99 663 70 00</a></li>
              <li><a data-aos="fade-up" href="#">etusha@gmail.com</a></li>
              <li><a data-aos="fade-up" href="#">{t('OurProjects')}</a></li>
              <li><a data-aos="fade-up" href="#">{t('OurTeam')}</a></li>
              <li><a data-aos="fade-up" href="#">{t('contactAdressText')}</a></li>
            </ul>
          </nav>
          <h2 className="copyright">{t('Copyright')}</h2>
        </div>
      </section>
    </footer>
    </>
  )
}

import React, { useEffect, useRef, useState } from "react";
import HeroBgVd from '../img/HeroBgVd.mp4'
import PatternIcon from '../img/pattern_icon.svg'
import ConfirmationIcon from '../img/confirmation_icon.svg'
import SxemaIcon from '../img/sxema_icon.svg'
import PlanIcon from '../img/plan_icon.svg'
import StarIcon from '../img/star_icon.svg'
import StandardsImg from '../img/standardsImg.png'
import ProjectsSlide from "./ProjectsSlide";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { API_PATH } from "../tools/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";
import "../styles.css"
import Team1 from '../img/team1.png'


export default function Home() {    
  const {t} = useTranslation()
  const [team,setTeam] = useState([])
  const [contact,setContact] = useState([])

  const getContact = () =>{
    axios.get(API_PATH + 'main/contact/')
      .then((res) =>{
        setContact(res.data[0])
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
    getContact();
  },[])

  return (
    <>
    <main>
      {/* HERO SECTION START */}
      <section id='heroSection'>
        <div>
          <video className='heroVideo' src={HeroBgVd} autoPlay loop muted />
        </div>
        <div className="container">
          <div className='heroContent'>
            <h2 className='hero_title'> {t("HeroTitle")} </h2>
            <div className='heroInfo'>
              <h3 className='heroInfo_title'>{t('Habaringiz')}</h3>
              <form className="was-validated heroForm">
                <div>
                  <input type="text" className="form-control is-valid" id="validationServer01" required placeholder={t('FormName')} />
                </div>
                <div>
                  <input type="number" className="form-control is-valid" id="validationServer01" required placeholder={t('FormNum')} />
                </div>
                <div className="mb-3">
                  <select className="form-select" required aria-h2="select example">
                    <option value="">{t('XizmatTuri')}</option>
                    <option value="1">{t('Sewing')}</option>
                    <option value="2">{t('Hairdresser')}</option>
                    <option value="3">{t('ChemicalCleaning')}</option>
                  </select>
                </div>
                <div className="mb-3">
                  <textarea className="form-control" id="validationTextarea" placeholder={t('Habaringiz')} required></textarea>
                </div>
                <div>
                  <button className="btn bg-success heroFormSubmit" type="submit">{t('Send')}</button>
                </div>
              </form>
            </div>
          </div>    
        </div>
      </section> 
      {/* HERO SECTION END */}

      <section id="mainBgImg">
        <section id='whyUs_section'>
          <div className="container">
            <div className='whyUsTitle_content'>
              <img data-aos="fade-up" src={PatternIcon} alt="..." />
              <h2 data-aos="fade-up">{t('NegaBiz')}</h2>
            </div>
            <div className='whyUs_content'>
              <div data-aos="fade-up" className='whyUs_card'>
                <img src={ConfirmationIcon} alt="..." />
                <h3>{t('MutaxasislarTitle')}</h3>
                <p>{t('MutaxasislarText')}</p>
              </div>
              <div data-aos="fade-up" className='whyUs_card'>
                <img src={SxemaIcon} alt="..." />
                <h3>{t('MutaxasislarTitle2')}</h3>
                <p>{t('MutaxasislarText2')}</p>
              </div>
              <div data-aos="fade-up" className='whyUs_card'>
                <img src={PlanIcon} alt="..." />
                <h3>{t('MutaxasislarTitle3')}</h3>
                <p>{t('MutaxasislarText3')}</p>
              </div>
              <div data-aos="fade-up" className='whyUs_card'>
                <img src={StarIcon} alt="..." />
                <h3> {t('MutaxasislarTitle4')} </h3>
                <p>{t('MutaxasislarText4')} </p>
              </div>
            </div>
          </div>
          <div className='standardsContent d-flex justify-content-center align-items-center'>
              <img data-aos="fade-right" src={StandardsImg} alt="..." />
              <div className='standardsInfo'>
                <h2 data-aos="fade-up">{t('Standartlar')}</h2>
                <div data-aos="fade-up" className='standardsInfoContent d-flex'>
                  <div className='standardsInfoSec'>
                    <span>15</span>
                    <h3>{t('StandardsTitle')}</h3>
                  </div>
                  <div className='standardsInfoSec'>
                    <span>2</span>
                    <h3>{t('StandardsTitle2')}</h3>
                  </div>
                </div>
                <div data-aos="fade-up" className='standardsInfoContent d-flex'>
                  <div className='standardsInfoSec'>
                    <span>20</span>
                    <h3>{t('StandardsTitle3')}</h3>
                  </div>
                  <div className='standardsInfoSec'>
                    <span>10</span>
                    <h3>{t('StandardsTitle4')}</h3>
                  </div>
                </div>
              </div>
            </div>
        </section>
        {/* WHY US SECTION END */}
        <ProjectsSlide />
        {/* OUR PROJECTS SECTION END */}
        <section id="ourTeam"> 
          <div className="container">
            <div className='whyUsTitle_content ourTeamTitle'>
              <img data-aos="fade-up" src={PatternIcon} alt="..." />
              <h2 data-aos="fade-up">{t('OurTeam')}</h2>
            </div>
            <div data-aos="fade-up" className="carousel_content">
            <Swiper
              grabCursor={true}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ["-120%", 0, -500],
                },
                next: {
                  shadow: true,
                  translate: ["120%", 0, -500],
                },
              }}
              modules={[EffectCreative]}
              className="mySwiper2">
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
            </Swiper>
            <Swiper
              grabCursor={true}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ["-120%", 0, -500],
                },
                next: {
                  shadow: true,
                  translate: ["120%", 0, -500],
                },
              }}
              modules={[EffectCreative]}
              className="mySwiper2">
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
            </Swiper>
            <Swiper
              grabCursor={true}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ["-120%", 0, -500],
                },
                next: {
                  shadow: true,
                  translate: ["120%", 0, -500],
                },
              }}
              modules={[EffectCreative]}
              className="mySwiper2 mySwiper3">
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
            </Swiper>
            
            </div>
          </div>
        </section>
        {/* OUR TEAM END */}

        <section id="faq">
          <div className="container">
            <div className='whyUsTitle_content ourTeamTitle'>
              <img data-aos="fade-up" src={PatternIcon} alt="..." />
              <h2 data-aos="fade-up">{t('TSS')}</h2>
            </div>
            <div data-aos="fade-up"  className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    {t('acardionTitle')}
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the.accordion-flush className. This is the first item's accordion body.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  {t('acardionTitle2')}
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the.accordion-flush className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  {t('acardionTitle3')}
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the.accordion-flush className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  {t('acardionTitle4')}
                  </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the.accordion-flush className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    {t('acardionTitle5')}
                  </button>
                </h2>
                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the.accordion-flush className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingSix">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                    {t('acardionTitle6')}
                  </button>
                </h2>
                <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the.accordion-flush className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingSeven">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                  {t('acardionTitle7')}
                  </button>
                </h2>
                <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the.accordion-flush className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingeight">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseeight" aria-expanded="false" aria-controls="flush-collapseeight">
                  {t('acardionTitle8')}
                  </button>
                </h2>
                <div id="flush-collapseeight" className="accordion-collapse collapse" aria-labelledby="flush-headingeight" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">В среднем, разработка дизайн-проекта для квартиры занимает 1 - 1.5 месяца, а для коммерческого объекта требуется 2-3 месяца. Все в зависимости от квадратуры объекта.</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ END */}
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
              <form>
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
                  <input type="datetime-local" id="meeting-time" name="meeting-time" value="2023-03-23T20:30" min="2018-06-07T00:00" max="2018-06-14T00:00"/>
                </div>
              </form>
                <div>
                  <a href="tel:+998993585110">{t('contactCallMe')}</a>
                </div>
            </div>
          </div>
        </section>
        {/* CONTACT END */}
      </section>
    </main>
    {/* MAIN END*/}
    </>
  )
}

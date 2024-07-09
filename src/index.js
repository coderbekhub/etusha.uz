import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import i18n from 'i18next'  
import { useTranslation, initReactI18next } from "react-i18next"
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import '../node_modules/flag-icons/css/flag-icons.min.css'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedlngs: ['en', 'uz', 'ru', 'kr'],
    fallbackLng: "en",
    detection: {
      order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'] 
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: {useSuspense: false}
  });
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />,
  </React.StrictMode>
);


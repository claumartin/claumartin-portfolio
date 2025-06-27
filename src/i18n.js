import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJSON from './locales/en.json'
import esJSON from './locales/es.json'

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    resources: {
      en: { ...enJSON },
      es: { ...esJSON },
    },
  });


export default i18n;
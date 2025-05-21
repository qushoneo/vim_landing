import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import ru from './locales/ru/translation.json';

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: JSON.parse(localStorage.getItem("language"))?.value || "ru",
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;

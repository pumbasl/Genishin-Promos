import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import detector from "i18next-browser-languagedetector";


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(detector)
  .use(Backend)
  .init({
    fallbackLng: false,
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
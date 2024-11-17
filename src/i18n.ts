import i18n from "i18next";
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import useLanguageStore from "./features/language-switch/services/store";

i18n
    .use(i18nBackend)
    .use(initReactI18next)
    .init({
        fallbackLng: "ru",
        lng: useLanguageStore.getState().language, 
        interpolation: {
        escapeValue: false,
        },
        backend: {
        loadPath: "http://localhost:5173/i18n/{{lng}}.json",
        },
    });

export default i18n;

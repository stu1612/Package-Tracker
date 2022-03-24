import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: "Hi Carl, track all your orders and packages",
            part2: "Ready for collection",
            part3: "Delivered",
            part4: "On the way",
            part5: "Order info received",
          },
        },
      },
      sv: {
        translation: {
          description: {
            part1: "Hej Carl, spåra alla dina beställningar och paket",
            part2: "Redo för insamling",
            part3: "Levereras",
            part4: "På väg",
            part5: "Beställningsinformation mottagen",
          },
        },
      },
      da: {
        translation: {
          description: {
            part1: "Hej Carl, spor alle dine ordrer og pakker",
            part2: "Klar til afhentning",
            part3: "Leveret",
            part4: "På vej",
            part5: "Ordreinformation modtaget",
          },
        },
      },
      no: {
        translation: {
          description: {
            part1: "Hei Carl, spor alle dine bestillinger og pakker",
            part2: "Klar for innsamling",
            part3: "Levert",
            part4: "Er på vei",
            part5: "Bestillingsinfo mottatt",
          },
        },
      },
    },
  });

export default i18n;

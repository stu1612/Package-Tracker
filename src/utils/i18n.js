import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: "Hi Carl, track all your orders and packages",
            part2: "Order info received",
            part3: "On the way",
            part4: "Ready for collection",
            part5: "Delivered",
          },
        },
      },
      sv: {
        translation: {
          description: {
            part1: "Hej Carl, spåra alla dina beställningar och paket",
            part2: "Beställningsinformation mottagen",
            part3: "På väg",
            part4: "Redo för insamling",
            part5: "Levereras",
          },
        },
      },
      da: {
        translation: {
          description: {
            part1: "Hej Carl, spor alle dine ordrer og pakker",
            part2: "Ordreinformation modtaget",
            part3: "På vej",
            part4: "Klar til afhentning",
            part5: "Leveret",
          },
        },
      },
      no: {
        translation: {
          description: {
            part1: "Hei Carl, spor alle dine bestillinger og pakker",
            part2: "Bestillingsinfo mottatt",
            part3: "Er på vei",
            part4: "Klar for innsamling",
            part5: "Levert",
          },
        },
      },
    },
  });

export default i18n;

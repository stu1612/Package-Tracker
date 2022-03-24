// npm
import { Routes, Route, Navigate } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
// pages
import Home from "./pages/Home";
import Orders from "./pages/Orders";
// components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// styles
import "./styles/styles.css";

const lngs = {
  en: { nativeName: "English" },
  de: { nativeName: "Deutsch" },
};

export default function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
      <p>
        <Trans i18nKey="description.part1">
          Edit <code>src/App.js</code> and save to reload.
        </Trans>
      </p>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/package/:id" element={<Orders />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
      <p>{t("description.part2")}</p>
      <Footer />
    </div>
  );
}

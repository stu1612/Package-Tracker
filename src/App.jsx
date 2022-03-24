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
// images
import sweden from "./assets/images/icons/sv.png";
import denmark from "./assets/images/icons/da.png";
import norway from "./assets/images/icons/no.png";
import uk from "./assets/images/icons/uk.png";

const lngs = {
  // en: { nativeName: "English" },
  // sv: { nativeName: "Swedish" },
  // da: { nativeName: "Danish" },
  // no: { nativeName: "Norweigen" },
  en: { img: <img src={uk} alt="united kingdom flag" /> },
  sv: { img: <img src={sweden} alt="swedish flag" /> },
  da: { img: <img src={denmark} alt="danish flag" /> },
  no: { img: <img src={norway} alt="norweigen flag" /> },
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
            {/* {lngs[lng].nativeName} */}
            {lngs[lng].img}
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

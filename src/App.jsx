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

export default function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      {/* <p>
        <Trans i18nKey="description.part1">
          Edit <code>src/App.js</code> and save to reload.
        </Trans>
      </p> */}
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

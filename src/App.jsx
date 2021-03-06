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
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/package/:id" element={<Orders />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

// npm
import { Routes, Route, Navigate } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Orders from "./pages/Orders";
// styles
import "./styles/styles.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/package/:id" element={<Orders />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

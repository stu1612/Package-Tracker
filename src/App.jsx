import { Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Package from "./pages/Package";
// styles
import "./styles/styles.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/package/:id" element={<Package />} />
      </Routes>
    </div>
  );
}

import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
// pages
import Home from "./pages/Home";
import Package from "./pages/Package";
// styles
import "./styles/styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const url = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

  useEffect(() => {
    fetchData(url);
  }, []);

  async function fetchData(url) {
    const response = await fetch(url);
    const jsonData = await response.json();
    return setData(jsonData);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/package/:id" element={<Package data={data} />} />
      </Routes>
    </div>
  );
}

// npm
import { Routes, Route, Navigate } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Package from "./pages/Package";
// hooks
// import useFetch from "./hooks/useFetch";
// styles
import "./styles/styles.css";

export default function App() {
  // const [url, setUrl] = useState(
  //   "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840"
  // );
  // const { data } = useFetch(url);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/package/:id" element={<Package />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

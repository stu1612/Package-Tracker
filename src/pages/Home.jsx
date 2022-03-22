import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
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

  const packages = data.map((item) => (
    <Link key={item.id} to={`./package/${item.id}`}>
      <p>{item.status}</p>
      <p>{item.id}</p>
    </Link>
  ));

  return (
    <div>
      <h1>Home</h1>
      {packages}
    </div>
  );
}

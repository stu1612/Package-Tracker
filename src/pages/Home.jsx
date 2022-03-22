// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home({ data }) {
  //   const [data, setData] = useState([]);
  //   const url = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

  //   useEffect(() => {
  //     fetchData(url);
  //   }, []);

  //   async function fetchData(url) {
  //     const response = await fetch(url);
  //     const jsonData = await response.json();
  //     return setData(jsonData);
  //   }

  const packages = data.map((item) => (
    <div key={item.id}>
      <p>status: {item.status}</p>
      <p>parcelID: {item.parcel_id}</p>
      <p>sender: {item.sender}</p>
      <p>Verification: {item.verification_required}</p>
      <p>ETA: {item.eta}</p>
      <Link to={`./package/${item.parcel_id}`}>
        <button>Details</button>
      </Link>
    </div>
  ));

  return (
    <div>
      <h1>Home</h1>
      {packages}
    </div>
  );
}

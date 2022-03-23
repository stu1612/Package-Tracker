import { useState } from "react";
// npm
import { Link } from "react-router-dom";

export default function PackageItem({ item }) {
  const { parcel_id, sender, status, eta, verification_required } = item;
  // const [data, setData] = useState({
  //   id: "1t4",
  //   title: " How to pass state in react-router-dom",
  //   tag: ["reactjs", "react-router-dom"],
  // });
  const [data, setData] = useState(item);

  return (
    <div>
      <p>ID: {parcel_id}</p>
      <p>Sender: {sender}</p>
      <p>status: {status}</p>
      <p>eta: {eta}</p>
      <p>ID required: {verification_required}</p>
      {/* <Link to={`/package/${parcel_id}`}>Details</Link> */}
      {/* <Link to={`/package/${parcel_id}` state={{ data:data }}}>
        Details
      </Link> */}
      <Link to={`/package/${parcel_id}`} state={{ data: data }}>
        Details
      </Link>
    </div>
  );
}

// npm
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PackageItem({ item }) {
  const { parcel_id, sender, status, eta, verification_required } = item;
  const [itemData, setItemData] = useState(item);

  return (
    <div>
      <p>ID: {parcel_id}</p>
      <p>Sender: {sender}</p>
      <p>status: {status}</p>
      <p>eta: {eta}</p>
      <p>ID required: {verification_required}</p>
      <Link to={`/package/${parcel_id}`} state={{ data: itemData }}>
        Details
      </Link>
    </div>
  );
}

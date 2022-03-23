// npm
import { useNavigate } from "react-router-dom";

export default function PackageItemDetail({ data }) {
  const navigate = useNavigate();
  return (
    <div>
      <p>Parcel ID: {data.parcel_id}</p>
      <p>Parcel ID: {data.sender}</p>
      <p>Status: {data.status}</p>
      <p>Lang: {data.location_coordinate_longitude}</p>
      <p>Lat: {data.location_coordinate_latitude}</p>
      <p>Mobile: {data.user_phone}</p>
      <p>Name: {data.user_name}</p>
      <p>ETA: {data.eta}</p>
      <p>ID Required: {data.verification_required ? "yes" : "no"}</p>
      <p>Notes: {data.notes}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

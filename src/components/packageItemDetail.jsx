import { useNavigate } from "react-router-dom";

export default function PackageItemDetail({ item }) {
  const {
    parcel_id,
    status,
    location_coordinate_latitude,
    location_coordinate_langitude,
    user_phone,
    user_name,
    eta,
    verification_required,
    notes,
  } = item;

  const navigate = useNavigate();
  return (
    <div>
      <p>Parcel ID: {parcel_id}</p>
      <p>Status: {status}</p>
      <p>Lang: {location_coordinate_langitude}</p>
      <p>Lat: {location_coordinate_latitude}</p>
      <p>Mobile: {user_phone}</p>
      <p>Name: {user_name}</p>
      <p>ETA: {eta}</p>
      <p>ID Required: {verification_required}</p>
      <p>Notes: {notes}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

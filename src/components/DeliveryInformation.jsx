import Moment from "react-moment";

export default function DeliveryInformation({ data }) {
  const {
    eta,
    location_coordinate_latitude,
    location_coordinate_longitude,
    location_name,
  } = data;
  return (
    <div className="delivery-info">
      <h3>
        ETA: <Moment>{eta}</Moment>
      </h3>
      <p>Location: {location_name}</p>
      <p>Lang: {location_coordinate_longitude}</p>
      <p>Lat: {location_coordinate_latitude}</p>
    </div>
  );
}

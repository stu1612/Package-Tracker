// npm
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";

export default function PackageItemDetail({ data }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className={`bg-image ${data.status}`} />
      <div className="content">
        <div className="user-info">
          <p>{data.status}</p>
          <p>
            Updated: <Moment>{data.last_updated}</Moment>
          </p>
          <p>Name: {data.user_name}</p>
          <p>Mobile: {data.user_phone}</p>
        </div>
        <div className="package-info">
          <p>#{data.parcel_id}</p>
          <p>Sender: {data.sender}</p>
          <p>
            ID Required:{" "}
            {data.verification_required ? "ID verification is required" : "No"}
          </p>
          <p>Notes: {data.notes}</p>
        </div>
      </div>
      <div className="delivery-info">
        <p>
          ETA: <Moment>{data.eta}</Moment>
        </p>
        <p>Location: {data.location_name}</p>
        <p>Lang: {data.location_coordinate_longitude}</p>
        <p>Lat: {data.location_coordinate_latitude}</p>
      </div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

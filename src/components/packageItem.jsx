// npm
import { useState } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

export default function PackageItem({ item }) {
  const { parcel_id, status, eta, verification_required } = item;
  const [itemData] = useState(item);

  return (
    <div className="package-item">
      <div className="package-item_content">
        <div className="package-item_inner-box">
          <p className="btn btn-green">#{parcel_id}</p>
          <p className="card-text">{status}</p>
          <small className="card-text small">
            ETA: <Moment>{eta}</Moment>
          </small>
          <p className="card-text">
            {verification_required ? "ID verification is required" : null}
          </p>
        </div>
        <div className="package-item_outer-box">
          <Link
            to={`/package/${parcel_id}`}
            state={{ data: itemData }}
            className="btn btn-pink"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

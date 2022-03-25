// npm
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PackageItem({ item }) {
  const { parcel_id, status, eta, verification_required } = item;
  const [itemData] = useState(item);

  return (
    <div className="package-item">
      <div className="package-item_content">
        <div className="package-item_inner-box">
          <p className="btn btn-green">#{parcel_id}</p>
          <p className="card-text">status: {status}</p>
          <p className="card-text">eta: {eta}</p>
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

// npm
import { useParams, useLocation } from "react-router-dom";

// components
import PackageItemDetail from "../components/packageItemDetail";

export default function Package(props) {
  const { id } = useParams();
  const location = useLocation();
  console.log("location", location.state.data);
  const { parcel_id, status } = location.state.data;

  return (
    <div>
      <p>Hello {id}</p>
      <p>
        {parcel_id} - {status}
      </p>
    </div>
  );
}

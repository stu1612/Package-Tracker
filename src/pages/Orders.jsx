// npm
import { useLocation } from "react-router-dom";
// components
import PackageItemDetail from "../components/PackageItemDetail";

export default function Package() {
  // const { id } = useParams();
  const location = useLocation();
  const { data } = location.state;

  return (
    <div>
      {/* <p>Hello {id}</p> */}
      <PackageItemDetail data={data} />
    </div>
  );
}

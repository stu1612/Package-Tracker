// npm
import { useLocation } from "react-router-dom";
// components
import PackageItemDetail from "../components/PackageItemDetail";

export default function Package() {
  const location = useLocation();
  const { data } = location.state;

  return (
    <div>
      <PackageItemDetail data={data} />
    </div>
  );
}

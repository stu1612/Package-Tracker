// npm
import { useLocation } from "react-router-dom";
// components
import PackageItemDetail from "../components/PackageItemDetail";

export default function Package() {
  const location = useLocation();
  const { data } = location.state;

  return (
    <div className="layout-1200">
      <PackageItemDetail data={data} />
    </div>
  );
}

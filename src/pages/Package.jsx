// npm
import { useParams } from "react-router-dom";

import PackageItemDetail from "../components/packageItemDetail";

export default function Package({ data }) {
  const { id } = useParams();

  // properties
  const filteredData = data.filter((item) => item.parcel_id === id);

  // components
  const packageItem = filteredData.map((item) => (
    <PackageItemDetail item={item} />
  ));

  return <div>{packageItem}</div>;
}

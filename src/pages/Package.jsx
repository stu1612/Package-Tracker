// npm
import { useParams } from "react-router-dom";
// components
import PackageItemDetail from "../components/packageItemDetail";

export default function Package({ data }) {
  const { id } = useParams();
  console.log("useparams", id);

  // properties
  const filteredData = data.filter((item) => item.parcel_id === id);
  console.log("filteredData", filteredData);

  // components
  const packageItem = filteredData.map((item) => (
    <PackageItemDetail item={item} key={item.id} />
  ));

  return <div>{packageItem}</div>;
}

import { Link } from "react-router-dom";
// components
import PackageItem from "../components/packageItem";

export default function Home({ data }) {
  // components
  const packageItems = data.map((item) => (
    <PackageItem key={item.id} item={item} />
  ));

  return <div>{packageItems}</div>;
}

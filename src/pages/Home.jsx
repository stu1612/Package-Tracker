// npm
import useFetch from "../hooks/useFetch";
// components
import PackageItem from "../components/PackageItem";
// data
import jsonData from "../data/packages.json";
// utils
import { url } from "../utils/packageURL";

export default function Home() {
  const { data, loading, error } = useFetch(url);

  // components
  const isLoading = loading && <h2>Loading ..</h2>;

  const packages =
    data && data.map((item) => <PackageItem key={item.id} item={item} />);

  const backupPackages =
    error && jsonData.map((item) => <PackageItem key={item.id} item={item} />);

  // function filterClonedItem() {
  //   const clonedItems = [...data];
  //   const newList = clonedItems.filter((item) => item.status === "delivered");
  //   setData(newList);
  // }

  return (
    <div>
      {isLoading}
      {packages}
      {backupPackages}
    </div>
  );
}

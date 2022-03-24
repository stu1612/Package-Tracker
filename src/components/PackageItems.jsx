// components
import PackageItem from "./PackageItem";
// data
import jsonData from "../data/packages.json";

export default function PackageItems({ data, error, query }) {
  const packages = data
    .filter((item) => {
      if (query === "") {
        return item;
      } else if (item.parcel_id.includes(query)) {
        return item;
      }
    })
    .map((item) => <PackageItem key={item.id} item={item} />);

  const backupPackages =
    error && jsonData.map((item) => <PackageItem key={item.id} item={item} />);

  return (
    <div>
      {packages}
      {backupPackages}
    </div>
  );
}

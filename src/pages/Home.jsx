import { useState } from "react";
import useFetch from "../hooks/useFetch";
// components
import PackageItem from "../components/packageItem";

export default function Home() {
  const [url, setUrl] = useState(
    "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840"
  );
  const { data, loading } = useFetch(url);
  // components
  const packageItems =
    data && data.map((item) => <PackageItem key={item.id} item={item} />);

  // function filterClonedItem() {
  //   const clonedItems = [...data];
  //   const newList = clonedItems.filter((item) => item.status === "delivered");
  //   setData(newList);
  // }

  const isPending = loading && <h2>Loading ..</h2>;

  return (
    <div>
      {isPending}
      {packageItems}
    </div>
  );
}

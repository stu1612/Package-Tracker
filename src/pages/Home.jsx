import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
// components
import PackageItem from "../components/packageItem";
import jsonData from "../data/packages.json";

export default function Home() {
  // const [data, setData] = useState(null);
  const [url, setUrl] = useState(
    "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840"
  );
  const navigate = useNavigate();

  const { data, loading, error } = useFetch(url);

  // useEffect(() => {
  //   fetchData(url);
  // }, [url]);

  // async function fetchData(url) {
  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error(response.statusText);
  //     }
  //     const json = await response.json();
  //     setLoading(false);
  //     setData(json);
  //   } catch (err) {
  //     setLoading(false);
  //     setError("Could not fetch data");
  //     console.log(err.message);
  //   }
  // }

  // components
  const packageItems =
    data && data.map((item) => <PackageItem key={item.id} item={item} />);

  // const backupPackageItems =
  //   jsonData &&
  //   jsonData.map((item) => <PackageItem key={item.id} item={item} />);

  // function filterClonedItem() {
  //   const clonedItems = [...data];
  //   const newList = clonedItems.filter((item) => item.status === "delivered");
  //   setData(newList);
  // }

  const isPending = loading && <h2>Loading ..</h2>;

  const backup =
    error && jsonData.map((item) => <PackageItem key={item.id} item={item} />);

  return (
    <div>
      <h2 onClick={() => navigate("./products")}>Hello</h2>
      {isPending}
      {packageItems}
      {backup}
    </div>
  );
}

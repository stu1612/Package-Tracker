// npm
import { useState } from "react";
import useFetch from "../hooks/useFetch";
// components
import PackageItem from "../components/PackageItem";
import PackageItemCounter from "../components/PackageStatusCounter";
// data
import jsonData from "../data/packages.json";
// utils
import { url } from "../utils/api";
import PackageStatusCounter from "../components/PackageStatusCounter";

export default function Home() {
  const { data, loading, error } = useFetch(url);
  const [query, setQuery] = useState("");

  // components
  const isLoading = loading && <h2>Loading ..</h2>;

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

  function handleChange(event) {
    setQuery(event.target.value);
  }

  return (
    <div>
      <div>
        <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search for..."
            value={query}
            onChange={handleChange}
          />
        </label>
      </div>

      <PackageStatusCounter data={data} />
      {isLoading}
      {packages}
      {backupPackages}
    </div>
  );
}

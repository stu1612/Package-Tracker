// npm
import { useState } from "react";
// hooks
import useFetch from "../hooks/useFetch";
// components
import PackageItems from "../components/PackageItems";
import StatusCounter from "../components/StatusCounter";
import SearchItem from "../components/SearchItem";
// utils
import { url } from "../utils/api";
import onChangeHandler from "../utils/onChangeHandler";
import Banner from "../components/Banner";

export default function Home() {
  const [query, setQuery] = useState("");
  const { data, loading, error } = useFetch(url);
  // components
  const isLoading = loading && <h2>Loading ..</h2>;

  return (
    <div>
      {isLoading}
      <Banner
        handleChange={(event) => onChangeHandler(event, setQuery)}
        query={query}
      />
      <SearchItem
        handleChange={(event) => onChangeHandler(event, setQuery)}
        query={query}
      />
      <StatusCounter data={data} />
      <PackageItems query={query} error={error} data={data} />
    </div>
  );
}

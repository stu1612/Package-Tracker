// npm
import { useState } from "react";
// hooks
import useFetch from "../hooks/useFetch";
// components
import PackageItems from "../components/PackageItems";
import PackageStatusCounter from "../components/PackageStatusCounter";
import SearchItem from "../components/SearchItem";
// utils
import { url } from "../utils/api";
import onChangeHandler from "../utils/onChangeHandler";

export default function Home() {
  const [query, setQuery] = useState("");
  const { data, loading, error } = useFetch(url);
  // components
  const isLoading = loading && <h2>Loading ..</h2>;

  return (
    <div>
      {isLoading}
      <SearchItem
        handleChange={(event) => onChangeHandler(event, setQuery)}
        query={query}
      />
      <PackageStatusCounter data={data} />
      <PackageItems query={query} error={error} data={data} />
    </div>
  );
}

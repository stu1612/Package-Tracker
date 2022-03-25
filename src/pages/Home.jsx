// npm
import { useState } from "react";
// hooks
import useFetch from "../hooks/useFetch";
// components
import PackageItems from "../components/PackageItems";
import PackagesStatus from "../components/PackagesStatus";
import SearchItem from "../components/SearchItem";
// utils
import { url } from "../utils/api";
import onChangeHandler from "../utils/onChangeHandler";
import Banner from "../components/Banner";
import Loading from "../components/Loading";

export default function Home() {
  const [query, setQuery] = useState("");
  const { data, loading, error } = useFetch(url);
  // components
  const isLoading = loading && <Loading />;

  return (
    <div>
      {isLoading}
      <Banner />
      <SearchItem
        handleChange={(event) => onChangeHandler(event, setQuery)}
        query={query}
      />
      <PackagesStatus data={data} />
      <PackageItems query={query} error={error} data={data} />
    </div>
  );
}

import { useEffect, useState } from "react";
import jsonData from "../data/packages.json";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setLoading(false);
        setData(json);
        setError(null);
      } catch (err) {
        setLoading(false);
        setError("Could not fetch data");
        setData(jsonData);
        console.log(err.message);
      }
    }
    fetchData();
  }, [url]);
  return { data, loading };
}

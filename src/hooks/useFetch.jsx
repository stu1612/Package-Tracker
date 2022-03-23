// npm
import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();
        setLoading(false);
        setData(json);
        // setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.error("Fetch was aborted");
        } else {
          setLoading(false);
          setError("Could not fetch data");
          console.error(err.message);
        }
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, [url]);
  return { data, loading, error };
}
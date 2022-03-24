// npm
import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
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
        fetchSuccess(setLoading, setError);
        setData(json);
      } catch (err) {
        if (err.name === "AbortError") {
          console.error("Fetch was aborted");
        } else {
          fetchFailed(setLoading, setError);
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

function fetchSuccess(loadingState, errorState) {
  loadingState(false);
  errorState(null);
}

function fetchFailed(loadingState, errorState) {
  loadingState(false);
  errorState("Unable to make fetch request");
}

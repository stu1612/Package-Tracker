import { useEffect } from "react";

export default function Home() {
  const url = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

  useEffect(() => {
    fetchData(url);
  }, []);

  async function fetchData(url) {
    const response = await fetch(url);
    const jsonData = await response.json();
    console.log(jsonData);
  }

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

import { useParams, useNavigate } from "react-router-dom";

export default function Package({ data }) {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log("Package data", data);

  // properties
  const filteredDataArray = data
    .filter((item) => item.parcel_id === id)
    .map((prod) => (
      <div key={prod.id}>
        <p>{prod.status}</p>
        <p>{prod.sender}</p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    ));
  console.log("filteredDataArray packages", filteredDataArray);

  return (
    <div>
      Package - {id}
      {filteredDataArray}
    </div>
  );
}

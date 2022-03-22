import { useParams } from "react-router-dom";

export default function Package() {
  const { id } = useParams();
  return <div>Package - {id}</div>;
}

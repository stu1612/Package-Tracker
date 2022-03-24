// utils
import Counter from "../utils/counter";
// data
import statusList from "../data/packageStatus.json";

export default function PackageStatusCounter({ data }) {
  const packageStatus = statusList.map((status) => (
    <li key={status.id}>
      <p>{status.title}</p>
      <p>{Counter(data, status.status)}</p>
    </li>
  ));
  return (
    <section className="package-counter">
      <ul>{packageStatus}</ul>
    </section>
  );
}

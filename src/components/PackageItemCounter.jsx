// utils
import Counter from "../utils/counter";

export default function PackageItemCounter({ data }) {
  const delivered = Counter(data, "delivered");
  const onRoute = Counter(data, "on-the-way");
  const recieved = Counter(data, "order-info-received");
  const collect = Counter(data, "ready-for-pickup");
  return (
    <section className="package-counter">
      <ul>
        <li>
          <div>
            <p>Delivered: {delivered}</p>
          </div>
        </li>
        <li>
          <div>
            <p>On the Way: {onRoute}</p>
          </div>
        </li>
        <li>
          <div>
            <p>Order Information Recieved: {recieved}</p>
          </div>
        </li>
        <li>
          <div>
            <p>Ready for pickup: {collect}</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

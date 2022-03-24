import { useTranslation, Trans } from "react-i18next";

// utils
import Counter from "../utils/counter";
// data
import statusList from "../data/packageStatus.json";

export default function StatusCounter({ data }) {
  const { t, i18n } = useTranslation();
  const packageStatus = statusList.map((status) => (
    <li key={status.id}>
      <p>{status.title}</p>
      <p>{Counter(data, status.status)}</p>
    </li>
  ));

  return (
    <section className="package-counter">
      <ul>{packageStatus}</ul>
      <div className="link-items">
        <li>{t("description.part2")}</li>
        <li>{t("description.part3")}</li>
        <li>{t("description.part4")}</li>
        <li>{t("description.part5")}</li>
      </div>
    </section>
  );
}

import { useTranslation } from "react-i18next";
// utils
import Counter from "../utils/counter";
// data
import statusList from "../data/packageStatus.json";

export default function PackagesStatus({ data }) {
  const { t } = useTranslation();

  const packageStatus = statusList.map((status) => (
    <div key={status.id} className="package-status_item">
      <div className={`icon-wrapper ${status.className}`}>
        <img
          src={require(`../assets/images/icons/card-icons/${status.imgURL}`)}
          alt={status.alt}
        />
      </div>
      <p className="status-value">{Counter(data, status.status)}</p>
    </div>
  ));

  return (
    <section className="package-status layout-1200" id="package-status">
      <div className="package-status_items">{packageStatus}</div>
      <div className="status-title_container">
        <p>{t("description.part2")}</p>
        <p>{t("description.part3")}</p>
        <p>{t("description.part4")}</p>
        <p>{t("description.part5")}</p>
      </div>
    </section>
  );
}

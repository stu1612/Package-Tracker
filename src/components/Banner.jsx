// npm
import { useTranslation } from "react-i18next";

export default function Banner() {
  const { t } = useTranslation();

  return (
    <div className="banner-image">
      <h2>{t("description.part1")}</h2>
    </div>
  );
}

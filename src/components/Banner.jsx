// npm
import { useTranslation, Trans } from "react-i18next";

export default function Banner() {
  const { t, i18n } = useTranslation();

  return (
    <div className="banner-image">
      <h2>
        <Trans i18nKey="description.part1">
          Hi Carl, track all your orders and packages
        </Trans>
      </h2>
    </div>
  );
}

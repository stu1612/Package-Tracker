import { Trans } from "react-i18next";

export default function Banner() {
  return (
    <div>
      <p>
        <Trans i18nKey="description.part1">
          Hi Carl, track all your orders and packages
        </Trans>
      </p>
    </div>
  );
}

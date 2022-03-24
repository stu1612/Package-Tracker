// npm
import { useTranslation, Trans } from "react-i18next";
// images
import sweden from "../assets/images/icons/sv.png";
import denmark from "../assets/images/icons/da.png";
import norway from "../assets/images/icons/no.png";
import uk from "../assets/images/icons/uk.png";

const lngs = {
  en: { img: <img src={uk} alt="united kingdom flag" /> },
  sv: { img: <img src={sweden} alt="swedish flag" /> },
  da: { img: <img src={denmark} alt="danish flag" /> },
  no: { img: <img src={norway} alt="norweigen flag" /> },
};

export default function Navbar() {
  const { t, i18n } = useTranslation();

  return (
    <header>
      <nav>
        <h1>InstaPaket</h1>
        <ul>
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              className="lng-button"
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}
            >
              {lngs[lng].img}
            </button>
          ))}
        </ul>
      </nav>
    </header>
  );
}

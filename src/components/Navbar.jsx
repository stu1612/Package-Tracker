// npm
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
// images
import denmark from "../assets/images/icons/da.png";
import norway from "../assets/images/icons/no.png";
import sweden from "../assets/images/icons/sv.png";
import uk from "../assets/images/icons/uk.png";

const lngs = {
  en: { img: <img src={uk} alt="united kingdom flag" /> },
  sv: { img: <img src={sweden} alt="swedish flag" /> },
  da: { img: <img src={denmark} alt="danish flag" /> },
  no: { img: <img src={norway} alt="norweigen flag" /> },
};

export default function Navbar() {
  let navigate = useNavigate();
  const { i18n } = useTranslation();

  return (
    <header>
      <nav>
        <h1 onClick={() => navigate("/")}>InstaPaket</h1>
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

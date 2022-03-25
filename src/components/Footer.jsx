// npm
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <h3>Contact Us</h3>
        <p>+46 8784734 4535</p>
      </div>
      <div className="scoial-media">
        <FaFacebook size={28} className="media-icon" />
        <FaLinkedin size={28} className="media-icon" />
      </div>
    </div>
  );
}

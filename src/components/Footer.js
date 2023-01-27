import "../styles/home.css";
import { Link } from "react-router-dom";
import linkedinLogo from "../assets/images/linkedinLogo.png";
import behanceLogo from "../assets/images/behanceLogo.png";
import issuLogo from "../assets/images/issuuLogo.png";

function Footer() {
  return (
    <footer className="mDetail pb-5">
      <Link
        onClick={() => {
          window.open(`https://www.linkedin.com/in/msolerjulia/`);
        }}
        to="#"
        className="float-start"
      >
        <img
          src={linkedinLogo}
          alt="logo-linkedin"
          className="footer-logos me-2"
        />
      </Link>
      <Link
        onClick={() => {
          window.open(`https://www.behance.net/julislrm`);
        }}
        to="#"
        className="float-start"
      >
        <img
          src={behanceLogo}
          alt="logo-behance"
          className="footer-logos me-2"
        />
      </Link>
      <Link
        onClick={() => {
          window.open(`https://issuu.com/`);
        }}
        to="#"
        className="float-start"
      >
        <img src={issuLogo} alt="logo-issuu" className="footer-logos" />
      </Link>
      <div className="float-end end-style">
        <p className="float-end m-0 p-0 end-style">cel.: +55 11 97421-3809</p>
        <Link
          onClick={() =>
            (window.location = "mailto:urbana.perspectiva@gmail.com")
          }
          to="#"
          className="float-end m-0 p-0 end-style end-style-email"
        >
          urbana.perspectiva@gmail.com
        </Link>
      </div>
    </footer>
  );
}

export default Footer;

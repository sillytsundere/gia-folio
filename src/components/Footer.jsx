import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <a
          href="https://www.linkedin.com/in/julialpasquarella/"
          target="_blank"
          rel="noopener noreferrer"
          className="foot-icon"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
}

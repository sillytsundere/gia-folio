import { Link, useLocation } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
// import "./Header.css";

export default function Header() {
  const location = useLocation();

  const isWorkPage = location.pathname.startsWith("/work");

  return (
    <nav className="flex flex-row justify-between items-center p-12 text-charcoal">
      <div>
        <Link to="/" >
          Julia Pasquarella
        </Link>
      </div>
      <div className="flex flex-row items-center">
        <Link to="/work" className={`me-6 ${isWorkPage ? "underline" : ""}`}>
          Work
        </Link>
        <Link to="/resume" target="_blank" >
          Resume
        </Link>
        <a
          href="https://www.linkedin.com/in/julialpasquarella/"
          target="_blank"
          rel="noopener noreferrer"
          className="ms-6"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </nav>
  );
}

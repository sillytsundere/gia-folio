import { Link, useLocation } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  const location = useLocation();

  const isWorkPage = location.pathname.startsWith("/work");

  return (
    <nav className="header">
      <div>
        <Link to="/" className="home-link">
          Julia Pasquarella
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/work" className={`nav-item ${isWorkPage ? 'active' : ''}`}>
          Work
        </Link>
        <Link to="/resume" target="_blank" className="nav-item">Resume</Link>
        <a
          href="https://www.linkedin.com/in/julialpasquarella/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-icon"
        >
          <FaLinkedinIn className="icon" />
        </a>
      </div>
    </nav>
  );
}

import { Link, useLocation } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";

export default function Header() {
  const location = useLocation();

  const isWorkPage = location.pathname.startsWith("/work");

  return (
    <nav className="flex flex-row justify-between items-center px-14 py-12 text-charcoal">
      <div>
        <Link to="/" className="text-lg">
          Julia Pasquarella
        </Link>
      </div>
      <div className="flex flex-row items-center text-base">
        <Link to="/work" className={`me-7 ${isWorkPage ? "underline" : ""}`}>
          Work
        </Link>
        <Link to="/resume" target="_blank">
          Resume
        </Link>
        <a
          href="https://www.linkedin.com/in/julialpasquarella/"
          target="_blank"
          rel="noopener noreferrer"
          className="ms-7 text-lg"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </nav>
  );
}

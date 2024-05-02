import { Link, useLocation } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";

export default function Header() {
  const location = useLocation();

  const isWorkPage = location.pathname.startsWith("/work");

  const isArtPage = location.pathname === "/art";

  const isProjectPage = location.pathname.startsWith("/work/");

  return (
    <nav className={`flex flex-row justify-between items-center text-charcoal p-[25px] ${isProjectPage ? "bg-lightGreen" : "bg-white"}`}>
      <div>
        <Link to="/" className={`text-[26px] ${isProjectPage ? "text-accDarkTeal" : "text-charcoal"}`}>
          Julia Pasquarella
        </Link>
      </div>
      <div className="flex flex-row items-center text-base">
        <Link to="/work" className={`me-7 ${isWorkPage ? "underline" : ""}`}>
          Work
        </Link>
        <Link to="/art" className={`me-7 ${isArtPage ? "underline" : ""}`}>
          Art
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

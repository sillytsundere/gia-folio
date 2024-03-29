import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import './Header.css'


export default function Header() {
  return (
    <nav className="header">
      <div>
      <Link to="/" className="home-link">Julia Pasquarella</Link>
      </div>
      <div className="nav-links">
      <Link to="/work" className="nav-item">Work</Link>
      <p className="nav-item">Resume</p>
      <a href="https://www.linkedin.com/in/julialpasquarella/" target="_blank" rel="noopener noreferrer" className="nav-icon"><FaLinkedinIn className="icon" /></a>
      </div>
    </nav>
  );
}

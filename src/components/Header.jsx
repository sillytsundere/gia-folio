import { Link } from "react-router-dom";
import { SiLinkedin } from "react-icons/si"


export default function Header() {
  return (
    <div>
      <Link to="/">Julia Pasquarella</Link>
      <Link to="/work">Work</Link>
      <p>Resume</p>
      <a href="https://www.linkedin.com/in/julialpasquarella/" target="_blank"><SiLinkedin/></a>
    </div>
  );
}

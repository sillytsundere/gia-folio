import { FaLinkedinIn } from "react-icons/fa";
// import "./Footer.css";

export default function Footer() {
  return (
    <footer className="w-screen flex justify-center items-center bg-lightGreen h-[280px] sticky top-[100vh]">
      <div>
        <a
          href="https://www.linkedin.com/in/julialpasquarella/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-charcoal"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
}

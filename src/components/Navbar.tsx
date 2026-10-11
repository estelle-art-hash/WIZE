import { Link } from "react-router-dom";
import logo from "../assets/images/logo-5sQCXflA.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-[50] flex items-center justify-between px-4 md:px-12 py-6 bg-[#060413] ">
      <Link to="/">
        <img src={logo} alt="Wize logo" className="w-8 md:w-9 h-8 md:h-5" />
      </Link>

      <ul className="hidden md:flex gap-10 text-sm font-medium text-white/70">
        {["/", "/about", "/projects", "/blog", "/contact"].map((path, i) => {
          const names = ["Home", "About", "Projects", "Blog", "Contact"];
          return (
            <li key={i}>
              <Link to={path} className="hover:text-[#C6FF00] transition">
                {names[i]}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex gap-3 md:gap-4 text-white/60 text-sm transition-colors duration-200">
        <a
          href="#"
          className="hover:text-[#C6FF00] transition-colors duration-200"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>

        <a
          href="#"
          className="hover:text-[#C6FF00] transition-colors duration-200"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>

        <a
          href="#"
          className="hover:text-[#C6FF00] transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="#"
          className="hover:text-[#C6FF00] transition-colors duration-200"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

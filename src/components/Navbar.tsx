
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-5sQCXflA.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const names = ["Home", "About", "Projects", "Blog", "Contact"];
  const paths = ["/", "/about", "/projects", "/blog", "/contact"];

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-[50] bg-[#060413]">
      <div className="flex items-center justify-between px-4 md:px-12 py-5 md:py-6">
        {/* LOGO */}
        <Link to="/" onClick={closeMenu}>
          <img
            src={logo}
            alt="Wize logo"
            className="w-8 md:w-9 h-8 md:h-9 object-contain"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <ul className="hidden md:flex gap-10 text-sm font-medium text-white/70">
          {paths.map((path, i) => (
            <li key={path}>
              <Link
                to={path}
                className="hover:text-[#C6FF00] transition-colors duration-200"
              >
                {names[i]}
              </Link>
            </li>
          ))}
        </ul>

        {/* DESKTOP SOCIAL ICONS */}
        <div className="hidden md:flex gap-4 text-white/60 text-sm">
          <a href="#" aria-label="Facebook" className="hover:text-[#C6FF00] transition-colors">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-[#C6FF00] transition-colors">
            <FaTwitter />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-[#C6FF00] transition-colors">
            <FaLinkedinIn />
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-[#C6FF00] transition-colors">
            <FaGithub />
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#C6FF00] text-2xl p-1"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 px-6 py-4 bg-[#060413]">
          <ul className="flex flex-col gap-1 text-sm font-medium text-white/70">
            {paths.map((path, i) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={closeMenu}
                  className="block py-3 hover:text-[#C6FF00] transition-colors duration-200"
                >
                  {names[i]}
                </Link>
              </li>
            ))}
          </ul>

          {/* MOBILE SOCIAL ICONS */}
          <div className="flex gap-5 text-white/60 text-base border-t border-white/10 pt-4 mt-2">
            <a href="#" aria-label="Facebook" className="hover:text-[#C6FF00]">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-[#C6FF00]">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#C6FF00]">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-[#C6FF00]">
              <FaGithub />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

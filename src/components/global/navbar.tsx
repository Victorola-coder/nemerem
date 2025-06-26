import { Link } from "react-router-dom";
import { Ninja } from "../svgs";
import { useState } from "react";

const links: { link: string; label: string }[] = [
  { link: "/", label: "Home" },
  { link: "about", label: "About" },
  { link: "contact", label: "Contact" },
  { link: "services", label: "Services" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 lg:px-[88px] lg:py-[36px] flex items-center justify-between relative">
      <nav className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center gap-[2.06px]">
          <Ninja className="animate-spinn hover:animate-none w-4 h-4 sm:w-5 sm:h-5 lg:w-auto lg:h-auto" />
          <p className="text-sm sm:text-base lg:text-[16.28px] font-bold font-clashbold cursor-pointer active:motion-preset-confetti">
            UI*NINJA
          </p>
          <Ninja className="animate-spinn hover:animate-none w-4 h-4 sm:w-5 sm:h-5 lg:w-auto lg:h-auto" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-[70px]">
          {links.map((link) => (
            <li
              className="cursor-pointer font-dm font-medium text-base"
              key={link.link}
            >
              <Link to={link.link}>{link.label}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#D8E710] transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#D8E710] transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#D8E710] transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-black/95 z-[100] backdrop-blur-md border-t border-white/10 transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 visible transform translate-y-0"
            : "opacity-0 invisible transform -translate-y-4"
        }`}
      >
        <ul className="flex flex-col py-4">
          {links.map((link, index) => (
            <li key={link.link}>
              <Link
                to={link.link}
                onClick={closeMenu}
                className={`block px-6 py-3 font-dm font-medium text-base text-white hover:text-primary hover:bg-white/5 transition-all duration-200 ${
                  isMenuOpen ? "animate-slideInLeft" : ""
                }`}
                style={{
                  animationDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-[-1]"
          onClick={closeMenu}
        ></div>
      )}
    </header>
  );
}

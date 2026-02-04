import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../components/constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        ${styles.paddingX}
        fixed top-0 z-20 w-full
        transition-colors duration-300
        ${scrolled ? "bg-primary" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-4 sm:px-8">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("Home");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold">
            Kunal <span className="hidden sm:inline">| Portfolio</span>
          </p>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden sm:flex list-none gap-8">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`
                cursor-pointer text-[17px] font-medium
                ${active === nav.title ? "text-white" : "text-secondary"}
                hover:text-white
              `}
              onClick={() => setActive(nav.title)}
            >
              {nav.id === "resume" ? (
                <a
                  href="/Kunal_Gupta_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {nav.title}
                </a>
              ) : (
                <a href={`#${nav.id}`}>{nav.title}</a>
              )}
            </li>
          ))}
        </ul>

        {/* MOBILE MENU */}
        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`
              ${toggle ? "flex" : "hidden"}
              absolute top-16 right-4
              bg-black/90 backdrop-blur-md
              rounded-xl p-6 z-30
            `}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`
                    text-[16px] font-medium cursor-pointer
                    ${active === nav.title ? "text-white" : "text-secondary"}
                  `}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(false);
                  }}
                >
                  {nav.id === "resume" ? (
     <a
  href="/Kunal_Gupta_Resume.pdf"
  download
>
                      {nav.title}
                    </a>
                  ) : (
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

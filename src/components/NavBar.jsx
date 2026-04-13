import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = link.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - window.innerHeight * 0.08;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="logo"
        >
          SM<span className="text-blue-50">.</span>
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link} onClick={(e) => handleNavClick(e, link)}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="contact-btn group"
        >
          <div className="inner">
            <span>Let&apos;s Talk</span>
          </div>
        </a>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-white-50 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <img src="/images/menu.svg" alt="menu" className="size-6" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="lg:hidden px-5 pb-5 pt-3 flex flex-col gap-3 bg-black border-t border-black-50">
          {navLinks.map(({ link, name }) => (
            <a
              key={name}
              href={link}
              onClick={(e) => handleNavClick(e, link)}
              className="text-white-50 hover:text-white text-base py-2 border-b border-black-50 transition-colors"
            >
              {name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="mt-2 px-4 py-3 bg-white text-black font-semibold rounded-lg text-center"
          >
            Let&apos;s Talk
          </a>
        </nav>
      )}
    </header>
  );
};

export default NavBar;

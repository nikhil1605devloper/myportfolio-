import { useEffect, useState } from "react";
import { navItems } from "../data";

export default function Navbar({ theme, setTheme }) {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="wrap navbar-inner">
        <div className="logo">
          {theme === "sky" ? (
            <>Nikhil<span className="accent-text">.dev</span></>
          ) : (
            <>nikhil<span className="accent-text">.</span>dev</>
          )}
        </div>

        <div className={`navlinks ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? "active" : ""}
              onClick={() => handleClick(item.id)}
            >
              {theme === "dark" ? item.label.toLowerCase() : item.label}
            </a>
          ))}
        </div>

        <div className="navbar-right">
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === "sky" ? "dark" : "sky")}
            aria-label="Toggle color theme"
            title="Switch theme"
          >
            {theme === "sky" ? "🌙 Dark" : "☀️ Sky"}
          </button>
          <a href="#contact" className="nav-cta" onClick={() => handleClick("contact")}>
            {theme === "sky" ? "Let's talk" : "$ connect"}
          </a>
          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </nav>
  );
}

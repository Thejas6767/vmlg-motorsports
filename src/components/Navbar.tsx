import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Championships", href: "/championships" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">

        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <span>VMLG</span>
          <small>MOTOR SPORTS</small>
       </Link>

        <nav className="navbar__desktop">
          {navLinks.map((link) => (
  <Link
    key={link.label}
    to={link.href}
    className="navbar__link"
  >
    {link.label}
  </Link>
))}
        </nav>

        <Link to="/join" className="navbar__cta">
          <span>Join Us</span>
          <ArrowUpRight size={17} strokeWidth={2.5} />
        </Link>

        <button
          className="navbar__menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div className={`navbar__mobile ${isMenuOpen ? "is-open" : ""}`}>
        <nav className="navbar__mobile-links">
          {navLinks.map((link, index) => (
           <Link
  key={link.label}
  to={link.href}
  className="navbar__mobile-link"
  onClick={closeMenu}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span>0{index + 1}</span>
              {link.label}
            </Link>
          ))}
        </nav>

    <Link 
  to="/join" 
  className="navbar__mobile-cta"
  onClick={closeMenu}
>
          Join Us
          <ArrowUpRight size={19} />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
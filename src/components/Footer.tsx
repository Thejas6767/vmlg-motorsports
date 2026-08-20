import {
  ArrowUpRight,
  Camera,
  Play,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer__container">

        {/* TOP */}
        <div className="footer__top">

          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              VMLG
            </Link>

            <span>MOTOR SPORTS</span>
          </div>

          <div className="footer__statement">
            <span>SPEED.</span>
            <span>PASSION.</span>
            <span>PERFORMANCE.</span>
          </div>

        </div>

        {/* MIDDLE */}
        <div className="footer__middle">

          <div className="footer__column">
            <span className="footer__label">
              NAVIGATION
            </span>

            <nav className="footer__links">

              <Link to="/">
                Home
              </Link>

              <Link to="/events">
                Events
              </Link>

              <Link to="/championships">
                Championships
              </Link>

              <Link to="/about">
                About
              </Link>

              <Link to="/gallery">
                Gallery
              </Link>

              <Link to="/contact">
                Contact
              </Link>

            </nav>
          </div>

          <div className="footer__column">
            <span className="footer__label">
              CONNECT
            </span>

            <div className="footer__socials">

              <a
                href="https://www.instagram.com/vamcymerlamotorsports"
                target="_blank"
                rel="noreferrer"
                aria-label="VMLG Instagram"
              >
                <Camera size={19} />
                Instagram
                <ArrowUpRight size={16} />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="VMLG YouTube"
              >
                <Play size={19} />
                YouTube
                <ArrowUpRight size={16} />
              </a>

            </div>
          </div>

          <div className="footer__column footer__column--join">

            <span className="footer__label">
              READY TO RACE?
            </span>

            <Link
              to="/join"
              className="footer__join"
            >
              JOIN VMLG
              <ArrowUpRight size={20} />
            </Link>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer__bottom">

          <span>
            © 2026 VMLG MOTOR SPORTS
          </span>

          <span>
            INDIA
          </span>

          <span>
            SPEED • PASSION • PERFORMANCE
          </span>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
import {
  ArrowUpRight,
  Flag,
  Handshake,
  Users,
} from "lucide-react";

import "./Join.css";

const Join = () => {
  return (
    <main className="join-page">

      {/* HERO */}
      <section className="join-page__hero">
        <div className="join-page__container">

          <span className="join-page__eyebrow">
            08 / JOIN VMLG
          </span>

          <h1>
            JOIN
            <span>THE RACE.</span>
          </h1>

          <p>
            Be part of the VMLG motorsport experience.
            Ride, compete, partner and grow with us.
          </p>

        </div>
      </section>

      {/* OPTIONS */}
      <section className="join-page__options">
        <div className="join-page__container">

          <div className="join-page__header">
            <span>HOW DO YOU WANT TO JOIN?</span>
            <span>03 OPTIONS</span>
          </div>

          <div className="join-page__grid">

            {/* EVENT */}
            <article className="join-card">

              <div className="join-card__top">
                <span>01</span>

                <div className="join-card__icon">
                  <Flag size={25} />
                </div>
              </div>

              <div className="join-card__content">
                <h2>
                  RIDE
                  <span>WITH US.</span>
                </h2>

                <p>
                  Take part in VMLG events and experience
                  the excitement of motorsport from the track.
                </p>
              </div>

              <a
                href="/events"
                className="join-card__link"
              >
                EXPLORE EVENTS
                <ArrowUpRight size={19} />
              </a>

            </article>

            {/* PARTNERSHIP */}
            <article className="join-card">

              <div className="join-card__top">
                <span>02</span>

                <div className="join-card__icon">
                  <Handshake size={25} />
                </div>
              </div>

              <div className="join-card__content">
                <h2>
                  PARTNER
                  <span>WITH US.</span>
                </h2>

                <p>
                  Build something powerful with VMLG through
                  sponsorships, partnerships and collaborations.
                </p>
              </div>

              <a
                href="/contact"
                className="join-card__link"
              >
                BECOME A PARTNER
                <ArrowUpRight size={19} />
              </a>

            </article>

            {/* COMMUNITY */}
            <article className="join-card">

              <div className="join-card__top">
                <span>03</span>

                <div className="join-card__icon">
                  <Users size={25} />
                </div>
              </div>

              <div className="join-card__content">
                <h2>
                  JOIN
                  <span>THE COMMUNITY.</span>
                </h2>

                <p>
                  Stay connected with VMLG and follow the
                  latest races, events and motorsport action.
                </p>
              </div>

              <a
                href="https://www.instagram.com/vamcymerlamotorsports"
                target="_blank"
                rel="noreferrer"
                className="join-card__link"
              >
                FOLLOW VMLG
                <ArrowUpRight size={19} />
              </a>

            </article>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="join-page__cta">
        <div className="join-page__container">

          <span>VMLG MOTOR SPORTS</span>

          <h2>
            BUILT FOR
            <span>THE TRACK.</span>
          </h2>

          <a
            href="/contact"
            className="join-page__cta-button"
          >
            GET IN TOUCH
            <ArrowUpRight size={20} />
          </a>

        </div>
      </section>

    </main>
  );
};

export default Join;
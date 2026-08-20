import { ArrowUpRight, Play } from "lucide-react";
import aboutImage from "../assets/images/Screenshot 2026-08-19 175359.jpg";
import { aboutContent } from "../data/about";
import "./About.css";

const About = () => {
  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-page__hero">
        <div className="about-page__container">

          <span className="about-page__eyebrow">
            {aboutContent.eyebrow}
          </span>

          <h1>
            MORE THAN
            <span>A RACE.</span>
          </h1>

          <p>
            Motorsport is more than speed.
            It is competition, community and passion.
          </p>

        </div>
      </section>

      {/* STORY */}
      <section className="about-page__story">
        <div className="about-page__container">

          <div className="about-page__story-grid">

            <div className="about-page__story-heading">
              <span>01 / OUR STORY</span>

              <h2>
                BUILT FOR
                <span>SPEED.</span>
              </h2>
            </div>

            <div className="about-page__story-content">

              <p className="about-page__lead">
                {aboutContent.description}
              </p>

              <p>
                {aboutContent.secondaryDescription}
              </p>

              <a
                href="/contact"
                className="about-page__button"
              >
                GET IN TOUCH
                <ArrowUpRight size={19} />
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* IMAGE */}
      <section className="about-page__visual">
        <div className="about-page__container">

          <div className="about-page__image">

            <img
              src={aboutImage}
              alt="VMLG Motorsport rider racing"
            />

            <div className="about-page__image-tag">
              VMLG MOTOR SPORTS
            </div>

            <div className="about-page__image-number">
              01
            </div>

          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="about-page__values">
        <div className="about-page__container">

          <div className="about-page__values-heading">
            <span>02 / WHAT DRIVES US</span>

            <h2>
              RACE WITH
              <span>PURPOSE.</span>
            </h2>
          </div>

          <div className="about-page__values-grid">

            <article>
              <span>01</span>

              <h3>PERFORMANCE</h3>

              <p>
                We push ourselves and our machines
                to perform at the highest level.
              </p>
            </article>

            <article>
              <span>02</span>

              <h3>PASSION</h3>

              <p>
                Motorsport is at the heart of everything
                we create, organise and experience.
              </p>
            </article>

            <article>
              <span>03</span>

              <h3>COMMUNITY</h3>

              <p>
                We bring riders, teams and enthusiasts
                together through the power of racing.
              </p>
            </article>

          </div>

        </div>
      </section>

      {/* VIDEO CTA */}
      <section className="about-page__video">

        <div className="about-page__video-overlay">

          <span>03 / EXPERIENCE VMLG</span>

          <h2>
            LIVE THE
            <span>RACE.</span>
          </h2>

          <button
            type="button"
            className="about-page__play"
            aria-label="Play VMLG racing video"
          >
            <Play size={22} fill="currentColor" />
          </button>

        </div>

      </section>

    </main>
  );
};

export default About;
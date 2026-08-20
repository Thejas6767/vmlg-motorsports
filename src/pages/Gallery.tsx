import { ArrowUpRight, Play } from "lucide-react";

import image1 from "../assets/images/Screenshot 2026-08-19 175240.jpg";
import image2 from "../assets/images/Screenshot 2026-08-19 175320.jpg";
import image3 from "../assets/images/Screenshot 2026-08-19 175341.jpg";
import image4 from "../assets/images/Screenshot 2026-08-19 175359.jpg";

import featuredVideo from "../assets/videos/13820397_1920_1080_120fps.mp4";

import "./Gallery.css";

const Gallery = () => {
  return (
    <main className="gallery-page">

      {/* HERO */}
      <section className="gallery-page__hero">
        <div className="gallery-page__container">

          <span className="gallery-page__eyebrow">
            03 / VMLG MOTOR SPORTS
          </span>

          <h1>
            THE
            <span>MEDIA.</span>
          </h1>

          <p>
            Step inside the world of VMLG motorsport.
            Explore race-day moments, machines and
            unforgettable action.
          </p>

        </div>
      </section>

      {/* FEATURED VIDEO */}
      <section className="gallery-page__featured">
        <div className="gallery-page__container">

          <div className="gallery-page__section-header">
            <span>01 / FEATURED</span>
            <span>RACE HIGHLIGHTS</span>
          </div>

          <div className="gallery-page__video">

            <video
              autoPlay
              muted
              loop
              playsInline
              poster={image1}
            >
              <source
                src={featuredVideo}
                type="video/mp4"
              />
            </video>

            <div className="gallery-page__video-overlay" />

            <div className="gallery-page__video-info">
              <span>VMLG / RACE DAY</span>

              <h2>
                FULL
                <span>THROTTLE.</span>
              </h2>
            </div>

            <div className="gallery-page__play">
              <Play
                size={22}
                fill="currentColor"
              />
            </div>

          </div>

        </div>
      </section>

      {/* PHOTO GRID */}
      <section className="gallery-page__photos">
        <div className="gallery-page__container">

          <div className="gallery-page__section-header">
            <span>02 / PHOTOGRAPHY</span>
            <span>TRACK MOMENTS</span>
          </div>

          <div className="gallery-page__grid">

            <article className="gallery-photo gallery-photo--large">
              <img
                src={image1}
                alt="VMLG race day"
              />

              <div className="gallery-photo__overlay" />

              <div className="gallery-photo__content">
                <span>01 / EVENT</span>
                <h3>RACE DAY</h3>
              </div>
            </article>

            <article className="gallery-photo">
              <img
                src={image2}
                alt="VMLG track action"
              />

              <div className="gallery-photo__overlay" />

              <div className="gallery-photo__content">
                <span>02 / RACING</span>
                <h3>TRACK ACTION</h3>
              </div>
            </article>

            <article className="gallery-photo">
              <img
                src={image3}
                alt="VMLG championship"
              />

              <div className="gallery-photo__overlay" />

              <div className="gallery-photo__content">
                <span>03 / CHAMPIONSHIP</span>
                <h3>THE BATTLE</h3>
              </div>
            </article>

            <article className="gallery-photo gallery-photo--wide">
              <img
                src={image4}
                alt="VMLG motorsport"
              />

              <div className="gallery-photo__overlay" />

              <div className="gallery-photo__content">
                <span>04 / VMLG</span>
                <h3>MOTORSPORT</h3>
              </div>
            </article>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="gallery-page__cta">

        <div className="gallery-page__cta-content">

          <span>03 / STAY CONNECTED</span>

          <h2>
            FOLLOW THE
            <span>ACTION.</span>
          </h2>

          <a
            href="https://www.instagram.com/vamcymerlamotorsports"
            target="_blank"
            rel="noreferrer"
            className="gallery-page__button"
          >
            Follow VMLG
            <ArrowUpRight size={19} />
          </a>

        </div>

      </section>

    </main>
  );
};

export default Gallery;
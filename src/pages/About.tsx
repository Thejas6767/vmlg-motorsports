import { ArrowUpRight, Play } from "lucide-react";
import aboutImage from "../assets/images/Screenshot 2026-08-19 175359.jpg";
import { aboutContent } from "../data/about";
import experienceVideo from "../assets/videos/12294780-hd_1920_1080_24fps.mp4";
import { useState } from "react";
import "./About.css";

const About = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const openExperienceVideo = () => {
  setIsVideoOpen(true);
};
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
<section
  className="about-page__story"
  style={{
    backgroundImage: `url(${aboutImage})`,
  }}
>
  <div className="about-page__story-overlay" />

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

           <article data-number="01">
            

              <h3>PERFORMANCE</h3>

              <p>
                We push ourselves and our machines
                to perform at the highest level.
              </p>
            </article>

            <article data-number="02">
              

              <h3>PASSION</h3>

              <p>
                Motorsport is at the heart of everything
                we create, organise and experience.
              </p>
            </article>

            <article data-number="03">
             

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
  className="about-page__play"
  onClick={openExperienceVideo}
>
  <span>WATCH Race</span>
  <ArrowUpRight size={18} />
</button>

        </div>

      </section>
{isVideoOpen && (
  <div
    className="about-video-modal"
    onClick={() => setIsVideoOpen(false)}
  >
    <div
      className="about-video-modal__content"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="about-video-modal__close"
        onClick={() => setIsVideoOpen(false)}
        aria-label="Close video"
      >
        ×
      </button>

      <video
        src={experienceVideo}
        controls
        autoPlay
        playsInline
        className="about-video-modal__video"
      />
    </div>
  </div>
)}
    </main>
  );
};

export default About;
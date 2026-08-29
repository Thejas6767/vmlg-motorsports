import { ArrowUpRight } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import image1 from "../assets/images/Screenshot 2026-08-19 175240.jpg";
import image2 from "../assets/images/Screenshot 2026-08-19 175320.jpg";
import image3 from "../assets/images/Screenshot 2026-08-19 175341.jpg";
import image4 from "../assets/images/motocross-start.avif";
import ctaVideo from "../assets/videos/13441915_1920_1080_25fps.mp4";
import featuredVideo from "../assets/videos/2300435-hd_1920_1080_30fps.mp4";

import "./Gallery.css";


const Gallery = () => {
  const pageRef = useRef<HTMLElement>(null);

useLayoutEffect(() => {
  const page = pageRef.current;

  if (!page) return;

  const ctx = gsap.context(() => {
    const isMobile = window.innerWidth <= 600;

    const scrubValue = isMobile ? 0.5 : 3;
    const startValue = isMobile ? "top 75%" : "top 55%";
    const endValue = isMobile ? "top 25%" : "top 5%";

    /* =========================
       FEATURED VIDEO
    ========================= */

    const videoSection = page.querySelector(
      ".gallery-page__video"
    );

    const video = page.querySelector(
      ".gallery-page__video video"
    );

    const videoInfo = page.querySelector(
      ".gallery-page__video-info"
    );

    const videoTitle = page.querySelector(
      ".gallery-page__video-info h2"
    );

    if (videoSection && video && videoInfo && videoTitle) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: videoSection,
          start: startValue,
          end: endValue,
          scrub: scrubValue,
        },
      });

      tl.fromTo(
        video,
        {
          scale: 1.25,
        },
        {
          scale: 1,
          ease: "none",
        }
      )
        .fromTo(
          videoInfo,
          {
            y: isMobile ? 80 : 180,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
          },
          "-=0.25"
        )
        .fromTo(
          videoTitle,
          {
            x: isMobile ? -70 : -150,
            scale: isMobile ? 0.75 : 0.55,
            rotation: isMobile ? -2 : -4,
          },
          {
            x: 0,
            scale: 1,
            rotation: 0,
            ease: "power3.out",
          },
          "-=0.25"
        );
    }

    /* =========================
       PHOTO GRID
    ========================= */

    const photoSection = page.querySelector(
      ".gallery-page__photos"
    );

    const photoGrid = page.querySelector(
      ".gallery-page__grid"
    );

    const photoCards = page.querySelectorAll(
      ".gallery-photo"
    );

    if (
      photoSection &&
      photoGrid &&
      photoCards.length === 4
    ) {
      const photoTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: photoSection,
          start: startValue,
          end: endValue,
          scrub: scrubValue,
        },
      });

      photoTimeline
        .fromTo(
          photoGrid,
          {
            y: isMobile ? 50 : 100,
            scale: isMobile ? 0.97 : 0.92,
          },
          {
            y: 0,
            scale: 1,
            ease: "power3.out",
          }
        )
        .fromTo(
          photoCards[0],
          {
            x: isMobile ? -60 : -180,
            y: isMobile ? 40 : 120,
            rotation: -3,
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            ease: "power3.out",
          },
          "<"
        )
        .fromTo(
          photoCards[1],
          {
            x: isMobile ? 60 : 180,
            y: isMobile ? -40 : -100,
            rotation: 3,
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            ease: "power3.out",
          },
          "<"
        )
        .fromTo(
          photoCards[2],
          {
            x: isMobile ? -60 : -160,
            y: isMobile ? 40 : 100,
            rotation: -3,
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            ease: "power3.out",
          },
          "<"
        )
        .fromTo(
          photoCards[3],
          {
            x: isMobile ? 60 : 200,
            y: isMobile ? 40 : 120,
            rotation: 3,
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            ease: "power3.out",
          },
          "<"
        );
    }

    /* =========================
       CTA
    ========================= */

    const ctaSection = page.querySelector(
      ".gallery-page__cta"
    );

    const ctaVideo = page.querySelector(
      ".gallery-page__cta-video"
    );

    const ctaContent = page.querySelector(
      ".gallery-page__cta-content"
    );

    const ctaTitle = page.querySelector(
      ".gallery-page__cta h2"
    );

    const ctaButton = page.querySelector(
      ".gallery-page__button"
    );

    if (
      ctaSection &&
      ctaVideo &&
      ctaContent &&
      ctaTitle &&
      ctaButton
    ) {
      const ctaTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ctaSection,
          start: startValue,
          end: endValue,
          scrub: scrubValue,
        },
      });

      ctaTimeline
        .fromTo(
          ctaVideo,
          {
            scale: 1.25,
          },
          {
            scale: 1,
            ease: "none",
          }
        )
        .fromTo(
          ctaContent,
          {
            y: isMobile ? 70 : 180,
            scale: isMobile ? 0.9 : 0.75,
            opacity: 0,
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            ease: "power3.out",
          },
          "-=0.25"
        )
        .fromTo(
          ctaTitle,
          {
            scale: isMobile ? 0.8 : 0.65,
            y: isMobile ? 40 : 80,
          },
          {
            scale: 1,
            y: 0,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .fromTo(
          ctaButton,
          {
            y: isMobile ? 30 : 60,
            scale: isMobile ? 0.85 : 0.7,
            opacity: 0,
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            ease: "back.out(1.5)",
          },
          "-=0.2"
        );
    }

    ScrollTrigger.refresh();
  }, page);

  return () => ctx.revert();
}, []);

  return (
   <main
  ref={pageRef}
  className="gallery-page"
>

      {/* HERO */}
      <section className="gallery-page__hero">
  <div className="gallery-page__container">

    <div className="gallery-page__hero-content">

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

    <div className="gallery-page__filmstrip">

      <div className="gallery-page__filmstrip-item gallery-page__filmstrip-item--one">
        <img src={image1} alt="VMLG race day" />
      </div>

      <div className="gallery-page__filmstrip-item gallery-page__filmstrip-item--two">
        <img src={image2} alt="VMLG track action" />
      </div>

      <div className="gallery-page__filmstrip-item gallery-page__filmstrip-item--three">
        <img src={image3} alt="VMLG championship" />
      </div>

      <div className="gallery-page__filmstrip-item gallery-page__filmstrip-item--four">
        <img src={image4} alt="VMLG motorsport" />
      </div>

    </div>

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

  <video
    className="gallery-page__cta-video"
    src={ctaVideo}
    autoPlay
    muted
    loop
    playsInline
    aria-hidden="true"
  />

  <div className="gallery-page__cta-overlay" />

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
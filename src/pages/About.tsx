import { ArrowRight } from "lucide-react";
import aboutImage from "../assets/images/Screenshot 2026-08-19 175359.jpg";
import { aboutContent } from "../data/about";
import experienceVideo from "../assets/videos/12294780-hd_1920_1080_24fps.mp4";
import { useLayoutEffect, useRef } from "react";
import "./About.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const pageRef = useRef<HTMLElement>(null);
useLayoutEffect(() => {
  const page = pageRef.current;

  if (!page) return;

  const ctx = gsap.context(() => {
    const story = page.querySelector(".about-page__story");
    const heading = page.querySelector(".about-page__story-heading");
    const content = page.querySelector(".about-page__story-content");

    if (!story || !heading || !content) return;

    gsap.fromTo(
      heading,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: story,
          start: "top 80%",
          end: "top 35%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      content,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: story,
          start: "top 80%",
          end: "top 35%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      story,
      {
        backgroundPosition: "center 45%",
      },
      {
        backgroundPosition: "center 20%",
        ease: "none",
        scrollTrigger: {
          trigger: story,
          start: "top 90%",
          end: "top 35%",
          scrub: 2,
        },
      }
    );
        const values = page.querySelector(".about-page__values");
    const valueCards = page.querySelectorAll(
      ".about-page__values-grid article"
    );

    if (values && valueCards.length) {
      gsap.fromTo(
        valueCards,
        {
          y: 100,
          opacity: 0,
          scale: 0.9,
          rotate: 3,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: values,
            start: "top 90%",
            end: "top 45%",
            scrub: 1.5,
          },
        }
      );
    }    const videoSection = page.querySelector(
      ".about-page__video"
    );

    const videoOverlay = page.querySelector(
      ".about-page__video-overlay"
    );

    const videoTitle = page.querySelector(
      ".about-page__video-overlay h2"
    );

    const videoButton = page.querySelector(
      ".about-page__play"
    );

    if (
      videoSection &&
      videoOverlay &&
      videoTitle &&
      videoButton
    ) {
      gsap.fromTo(
        videoOverlay,
        {
          y: 100,
          opacity: 0,
          scale: 0.92,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: videoSection,
            start: "top 80%",
            end: "top 35%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        videoSection,
        {
          backgroundPosition: "center 65%",
          backgroundSize: "115%",
        },
        {
          backgroundPosition: "center 35%",
          backgroundSize: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: videoSection,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );
    }
  }, page);

  return () => ctx.revert();
}, []);
  return (
    <main
  ref={pageRef}
  className="about-page"
>

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
          <ArrowRight size={19} />
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

  <video
    className="about-page__video-bg"
    autoPlay
    muted
    loop
    playsInline
  >
    <source
      src={experienceVideo}
      type="video/mp4"
    />
  </video>

  <div className="about-page__video-overlay">

    <span>03 / EXPERIENCE VMLG</span>

    <h2>
      LIVE THE
      <span>RACE.</span>
    </h2>

    <a
      href="https://www.instagram.com/vamcymerlamotorsports?igsi=cDB5N2JrZzRlNDdr"
      target="_blank"
      rel="noopener noreferrer"
      className="about-page__play"
    >
      <span>VISIT INSTAGRAM</span>
      <ArrowRight size={18} />
    </a>

  </div>

</section>
    </main>
  );
};

export default About;
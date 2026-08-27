import { ArrowUpRight } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import aboutImage from "../assets/images/rally-dust.avif";
import { aboutContent } from "../data/about";

import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = aboutRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const top = section.querySelector(".about__top");
      const heading = section.querySelector(".about__content h2");
      const text = section.querySelector(".about__text");
      const image = section.querySelector(".about__image");
      const imageNumber = section.querySelector(".about__image-number");
      const bottom = section.querySelector(".about__bottom");

      if (
        !top ||
        !heading ||
        !text ||
        !image ||
        !imageNumber ||
        !bottom
      ) {
        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          end: "top 45%",
          scrub: 1,
        },
      });

      timeline
        .fromTo(
          top,
          {
            y: -40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
          }
        )
        .fromTo(
          heading,
          {
            x: -120,
            y: 100,
            scale: 0.8,
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .fromTo(
          image,
          {
            x: 180,
            scale: 0.82,
            opacity: 0,
          },
          {
            x: 0,
            scale: 1,
            opacity: 1,
            ease: "power3.out",
          },
          "-=0.7"
        )
        .fromTo(
          text,
          {
            y: 80,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .fromTo(
          imageNumber,
          {
            x: 70,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .fromTo(
          bottom,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
          },
          "-=0.4"
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={aboutRef} className="about">
      <div className="about__container">

        {/* TOP */}
        <div className="about__top">
          <span className="about__eyebrow">
            {aboutContent.eyebrow}
          </span>

          <span className="about__number">
            06
          </span>
        </div>

        {/* MAIN CONTENT */}
        <div className="about__grid">

          {/* TEXT */}
          <div className="about__content">
            <h2>
              MORE
              <span>THAN A</span>
              RACE.
            </h2>

            <div className="about__text">

              <p className="about__description">
                {aboutContent.description}
              </p>

              <p className="about__secondary">
                {aboutContent.secondaryDescription}
              </p>

              <a
                href="/about"
                className="about__button"
              >
                {aboutContent.buttonText}
                <ArrowUpRight size={19} />
              </a>

            </div>
          </div>

          {/* IMAGE */}
          <div className="about__image">
            <img
              src={aboutImage}
              alt="VMLG Motorsport rider"
            />

            <div className="about__image-label">
              <span>VMLG</span>
              <span>MOTOR SPORTS</span>
            </div>

            <div className="about__image-number">
              06 / 06
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="about__bottom">
          <span>VMLG MOTOR SPORTS</span>

          <span>
            SPEED • PASSION • PERFORMANCE
          </span>
        </div>

      </div>
    </section>
  );
};

export default About;
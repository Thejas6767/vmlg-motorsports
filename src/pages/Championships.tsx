import { ArrowUpRight, Trophy } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Championships.css";
import { championships } from "../data/championships";
import championshipVideo from "../assets/videos/12294790-hd_1920_1080_24fps.mp4";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);
const Championships = () => {
  const pageRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const ctx = gsap.context(() => {
      const videoSection = page.querySelector(
        ".championships-media"
      );

      const content = page.querySelector(
        ".championships-media__content"
      );

    if (!videoSection || !content) return;
      gsap.fromTo(
        content,
        {
          y: 300,
          scale: 0.55,
          opacity: 0,
          rotate: -3,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          rotate:0,
          ease: "power3.out",
         scrollTrigger: {
  trigger: videoSection,
  start: "top 50%",
  end: "top 20%",
  scrub: 1.5,
},
        }
      );
      const rows = page.querySelectorAll(
  ".championship-row"
);

if (rows.length) {
  rows.forEach((row) => {
    const number = row.querySelector(
      ".championship-row__number"
    );

    const icon = row.querySelector(
      ".championship-row__icon"
    );

    const content = row.querySelector(
      ".championship-row__content"
    );

    const link = row.querySelector(
      ".championship-row__link"
    );

    const rowTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: row,
        start: "top 50%",
        end: "top 20%",
        scrub: 1.5,
      },
    });

    rowTimeline
      .fromTo(
        row,
        {
          x: 180,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          ease: "power3.out",
        }
      )
      .fromTo(
        number,
        {
          x: -80,
          scale: 1.5,
          opacity: 0,
        },
        {
          x: 0,
          scale: 1,
          opacity: 1,
        },
        "-=0.6"
      )
      .fromTo(
        icon,
        {
          scale: 0,
          rotate: -45,
          opacity: 0,
        },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      )
      .fromTo(
        content,
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
        "-=0.5"
      )
      .fromTo(
        link,
        {
          x: 100,
          scale: 0.7,
          opacity: 0,
        },
        {
          x: 0,
          scale: 1,
          opacity: 1,
          ease: "back.out(1.5)",
        },
        "-=0.5"
      );
  });
}
    }, page);

    return () => ctx.revert();
  }, []);

  return (
    <main
  ref={pageRef}
  className="championships-page"
>

      {/* HERO */}
      <section className="championships-page__hero">
        <div className="championships-page__container">

          <span className="championships-page__eyebrow">
            02 / VMLG MOTOR SPORTS
          </span>

          <h1>
            THE
            <span>CHAMPIONSHIP.</span>
          </h1>

          <p>
            Competition, precision and performance.
            Discover the championships that define
            VMLG motorsport.
          </p>

        </div>
      </section>
{/* CINEMATIC VIDEO */}
<section className="championships-media">
  <div className="championships-media__video-wrap">

    <video
      autoPlay
      muted
      loop
      playsInline
      disablePictureInPicture
      controls={false}
      className="championships-media__video"
    >
      <source
        src={championshipVideo}
        type="video/mp4"
      />
    </video>

    <div className="championships-media__overlay" />

  <div className="championships-media__content">
      <span>
        VMLG MOTOR SPORTS / 02
      </span>

      <h2>
        THE ROAD TO
        <span>CHAMPIONSHIP.</span>
      </h2>

      <p>
        Speed. Precision. Competition.
        Every race builds the next champion.
      </p>
    </div>

    <div className="championships-media__label">
      RACE • PUSH • CONQUER
    </div>

  </div>
</section>



      {/* CHAMPIONSHIP LIST */}
      <section className="championships-page__list">
        <div className="championships-page__container">

          <div className="championships-page__header">
            <span>CHAMPIONSHIP SERIES</span>
            <span>{championships.length} SERIES</span>
          </div>
<div className="championships-divider">
  <span>03 / CHAMPIONSHIP SERIES</span>
  <span>THE COMPETITION CONTINUES</span>
</div>
          <div className="championships-page__items">

            {championships.map((championship, index) => (
              <article
                className="championship-row"
                key={championship.id}
              >

                {/* NUMBER */}
                <div className="championship-row__number">
                  0{index + 1}
                </div>

                {/* ICON */}
                <div className="championship-row__icon">
                  <Trophy size={28} />
                </div>

                {/* CONTENT */}
                <div className="championship-row__content">

                  <div className="championship-row__meta">
                    <span>
                      SEASON {championship.season}
                    </span>

                    <span>
                      {championship.rounds > 0
                        ? `${championship.rounds} ROUNDS`
                        : "ROUNDS TBA"}
                    </span>
                  </div>

                  <h2>
                    {championship.name}
                  </h2>

                  <p>
                    {championship.description}
                  </p>

                </div>

                {/* ACTION */}
                <a
                  href={`/championships/${championship.id}`}
                  className="championship-row__link"
                >
                  <span>VIEW SERIES</span>
                  <ArrowUpRight size={21} />
                </a>

              </article>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
};

export default Championships;
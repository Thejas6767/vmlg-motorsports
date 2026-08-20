import { ArrowUpRight, Trophy } from "lucide-react";
import "./Championships.css";
import { championships } from "../data/championships";
import championshipVideo from "../assets/videos/12294790-hd_1920_1080_24fps.mp4";
import { motion } from "framer-motion";
const Championships = () => {
  return (
    <main className="championships-page">

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

    <motion.div
      className="championships-media__content"
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
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
    </motion.div>

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
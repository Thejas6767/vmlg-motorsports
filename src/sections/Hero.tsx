import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import "./Hero.css";

import logo from "../assets/logo/logo.jpg";
import heroVideo from "../assets/videos/5803639-uhd_3840_2160_25fps.mp4";
import heroPoster from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="hero">

      {/* Yellow content area */}
      <motion.div
        className="hero__content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        <motion.div
          className="hero__brand"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img src={logo} alt="VMLG Motor Sports" />
        </motion.div>

        <div className="hero__text">

          <motion.p
            className="hero__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            VMLG MOTOR SPORTS
          </motion.p>

        <motion.h1
  initial="hidden"
  animate="show"
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.35,
      },
    },
  }}
>
  <motion.span
    className="hero-word hero-word--black"
    variants={{
      hidden: { opacity: 0, y: 60 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      },
    }}
  >
    WHERE
  </motion.span>

  <motion.span
    className="hero-word hero-word--black"
    variants={{
      hidden: { opacity: 0, y: 60 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      },
    }}
  >
    SPEED
  </motion.span>

  <motion.span
    className="hero-word hero-word--black"
    variants={{
      hidden: { opacity: 0, y: 60 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      },
    }}
  >
    MEETS
  </motion.span>

  <motion.span
    className="hero-word hero-word--white"
    variants={{
      hidden: { opacity: 0, y: 60 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      },
    }}
  >
    PASSION.
  </motion.span>
</motion.h1>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            Experience the thrill of motorsport through
            world-class events, competition and racing.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <a
              href="/events"
              className="hero__primary-button"
            >
              Explore Events
              <ArrowRight size={19} />
            </a>

            <a
              href="/about"
              className="hero__secondary-button"
            >
              Discover VMLG
            </a>
          </motion.div>

        </div>

        <motion.div
          className="hero__bottom"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <span>01</span>
          <div className="hero__line" />
          <span>VMLG MOTOR SPORTS</span>
        </motion.div>

      </motion.div>

      {/* Video area */}
      <motion.div
        className="hero__media"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          ease: "easeOut",
        }}
      >

        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          controls={false}
          poster={heroPoster}
        >
          <source
            src={heroVideo}
            type="video/mp4"
          />
        </video>

        <div className="hero__media-overlay" />

        <motion.div
          className="hero__video-label"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 1,
          }}
        >
          <span className="hero__video-dot" />
          LIVE THE RACE
        </motion.div>

      </motion.div>

    </section>
  );
};

export default Hero;
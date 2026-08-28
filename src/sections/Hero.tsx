import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import "./Hero.css";

import logo from "../assets/logo/no-background-1787907685309.png";
import heroVideo from "../assets/videos/5803639-uhd_3840_2160_25fps.mp4";
import heroPoster from "../assets/hero.png";
import heroBikeRight from "../assets/images/hero-bike-right.png";

const Hero = () => {
  return (
    <section className="hero">


<motion.img
  className="hero__bike hero__bike--right"
  src={heroBikeRight}
  alt=""
  aria-hidden="true"
  initial={{ opacity: 0, x: 120, scale: 0.85 }}
  animate={{ opacity: 1, x: 0, scale: 1 }}
  transition={{
    duration: 1.2,
    delay: 0.3,
    ease: [0.16, 1, 0.3, 1],
  }}
/>
      {/* Yellow content area */}
      <motion.div
        className="hero__content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

     <motion.div
  className="hero__brand"
  initial={{
    opacity: 0,
    y: -90,
    scale: 0.35,
    rotate: -20,
    filter: "blur(12px)",
  }}
  animate={{
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
  }}
  transition={{
    duration: 1.4,
    delay: 0.15,
    ease: [0.16, 1, 0.3, 1],
  }}
>
  <img src={logo} alt="VMLG Motor Sports" />
</motion.div>
        <div className="hero__text">
<motion.p
  className="hero__company-name"
  initial={{
    opacity: 0,
    y: 20,
    letterSpacing: "0.05em",
  }}
  animate={{
    opacity: 1,
    y: 0,
    letterSpacing: "0.35em",
  }}
  transition={{
    duration: 0.9,
    delay: 0.35,
    ease: "easeOut",
  }}
>
  VMLG MOTOR SPORTS
</motion.p>
<motion.h1
  className="hero__main-title"
  initial={{
    opacity: 0,
    x: "35vw",
    scale: 0.7,
    filter: "blur(10px)",
  }}
  animate={{
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
  }}
  transition={{
    duration: 1.5,
    delay: 0.5,
    ease: [0.16, 1, 0.3, 1],
  }}
>
  WHERE SPEED MEETS PASSION.
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
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { motorsportVideos } from "../data/videos";
import featuredVideo from "../assets/videos/13028271_1920_1080_60fps.mp4";
import featuredPoster from "../assets/hero.png";

import "./LatestAction.css";

const LatestAction = () => {
  const video = motorsportVideos[0];

  return (
    <section className="latest-action">
      <div className="latest-action__container">

        <motion.div
          className="latest-action__heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="latest-action__eyebrow">
              03 / FROM THE TRACK
            </span>

          <motion.h2
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  }}
>
  <motion.span
    className="latest-word latest-word--black"
    variants={{
      hidden: {
        opacity: 0,
        y: 50,
      },
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
    LATEST
  </motion.span>

  <motion.span
    className="latest-word latest-word--yellow"
    variants={{
      hidden: {
        opacity: 0,
        y: 50,
      },
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
    ACTION.
  </motion.span>
</motion.h2>
          </div>

          <p>
            Feel the speed. Experience the competition.
            Get closer to the action with VMLG motorsport.
          </p>
        </motion.div>

        <motion.div
          className="latest-action__feature"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: "easeOut",
          }}
        >

          <motion.div
            className="latest-action__video"
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >

            <video
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              controls={false}
              poster={featuredPoster}
            >
              <source
                src={featuredVideo}
                type="video/mp4"
              />
            </video>

            <div className="latest-action__overlay" />

            <motion.div
              className="latest-action__badge"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
            >
              <span />
              NOW PLAYING
            </motion.div>

            <motion.span
              className="latest-action__round"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
            >
              VMLG / 01
            </motion.span>

          </motion.div>

          <motion.div
            className="latest-action__content"
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
          >
            <span className="latest-action__category">
              {video.category}
            </span>

            <h3>{video.title}</h3>

            <p>{video.description}</p>

            <motion.a
              href="/gallery"
              className="latest-action__button"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Media
              <ArrowUpRight size={19} />
            </motion.a>
          </motion.div>

        </motion.div>

        <motion.div
          className="latest-action__footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
        >
          <span>VMLG MOTOR SPORTS</span>
          <span>RACE • PUSH • CONQUER</span>
        </motion.div>

      </div>
    </section>
  );
};

export default LatestAction;
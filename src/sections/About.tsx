import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import aboutImage from "../assets/images/rally-dust.avif";
import { aboutContent } from "../data/about";

import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about__container">

        {/* TOP */}
        <motion.div
          className="about__top"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="about__eyebrow">
            {aboutContent.eyebrow}
          </span>

          <span className="about__number">
            06
          </span>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="about__grid">

          {/* TEXT */}
          <motion.div
            className="about__content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <h2>
              MORE
              <span>THAN A</span>
              RACE.
            </h2>

            <div className="about__text">

              <motion.p
                className="about__description"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
              >
                {aboutContent.description}
              </motion.p>

              <motion.p
                className="about__secondary"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.35,
                }}
              >
                {aboutContent.secondaryDescription}
              </motion.p>

              <motion.a
                href="/about"
                className="about__button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.97 }}
              >
                {aboutContent.buttonText}
                <ArrowUpRight size={19} />
              </motion.a>

            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="about__image"
            initial={{
              opacity: 0,
              x: 50,
              scale: 1.03,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          >
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
          </motion.div>

        </div>

        {/* BOTTOM */}
        <motion.div
          className="about__bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
        >
          <span>VMLG MOTOR SPORTS</span>

          <span>
            SPEED • PASSION • PERFORMANCE
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
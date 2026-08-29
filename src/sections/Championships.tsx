import { ArrowUpRight, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { championships } from "../data/championships";
import "./Championships.css";
import championshipImage1 from "../assets/images/motocross-jump.avif";
import championshipImage2 from "../assets/images/race-car-wide.avif";
const championshipImages = [
  championshipImage1,
  championshipImage2,
];

const Championships = () => {

  return (
   <section className="championships">
      <div className="championships__container">

        {/* SECTION HEADER */}
        <motion.div
          className="championships__top"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="championships__eyebrow">
              02 / COMPETITION
            </span>

            <h2>
              THE
              <span>CHAMPIONSHIP.</span>
            </h2>
          </div>

          <motion.div
            className="championships__intro"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Trophy size={32} strokeWidth={1.5} />

            <p>
              Competition built around speed, precision,
              performance and the relentless pursuit of
              victory.
            </p>
          </motion.div>
        </motion.div>

        {/* CHAMPIONSHIP CARDS */}
        <div className="championships__grid">

          {championships.map((championship, index) => (
 <motion.article
  className="championship-card"
  key={championship.id}
  initial={{
    opacity: 0,
    x: index === 0 ? -80 : 80,
    y: 60,
    rotate: index === 0 ? -3 : 3,
    scale: 0.94,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
  }}
  viewport={{
    once: true,
    amount: 0.2,
  }}
  transition={{
    duration: 1,
    delay: index * 0.18,
    ease: [0.16, 1, 0.3, 1],
  }}
>

           <motion.div
  className="championship-card__image"
  initial={{
    scale: 1.15,
    opacity: 0,
  }}
  whileInView={{
    scale: 1,
    opacity: 1,
  }}
  viewport={{
    once: true,
    amount: 0.2,
  }}
  transition={{
    duration: 1.2,
    delay: 0.2 + index * 0.18,
    ease: [0.16, 1, 0.3, 1],
  }}
>
                <img
                  src={
                    championshipImages[
                      index % championshipImages.length
                    ]
                  }
                  alt={championship.name}
                />

                <span className="championship-card__number">
                  0{index + 1}
                </span>

                <span className="championship-card__season">
                  {championship.season}
                </span>
              </motion.div>

            <motion.div
  className="championship-card__content"
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
    amount: 0.2,
  }}
  transition={{
    duration: 0.8,
    delay: 0.55 + index * 0.18,
    ease: [0.16, 1, 0.3, 1],
  }}
>
                <div>
                  <span className="championship-card__label">
                    CHAMPIONSHIP
                  </span>

<motion.h3
  initial={{
    opacity: 0,
    y: 30,
    x: -20,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    x: 0,
  }}
  viewport={{
    once: true,
  }}
  transition={{
    duration: 0.7,
    delay: 0.75 + index * 0.18,
    ease: [0.16, 1, 0.3, 1],
  }}
>
  {championship.name}
</motion.h3>
                </div>

                <div className="championship-card__bottom">
                  <p>{championship.description}</p>

                  <motion.a
                    href="/championships"
                    className="championship-card__link"
                    aria-label={`View ${championship.name}`}
                    whileHover={{
                      scale: 1.08,
                      rotate: -4,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                  >
                    <ArrowUpRight size={22} />
                  </motion.a>
                </div>
              </motion.div>

            </motion.article>
          ))}

        </div>

        {/* FOOTER */}
        <motion.div
          className="championships__footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
        >
          <span>VMLG MOTOR SPORTS</span>

          <a href="/championships">
            VIEW ALL CHAMPIONSHIPS
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Championships;
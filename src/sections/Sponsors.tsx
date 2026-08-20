import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { sponsors } from "../data/sponsors";
import "./Sponsors.css";

const Sponsors = () => {
  return (
    <section className="sponsors">
      <div className="sponsors__container">

        {/* Heading */}
        <motion.div
          className="sponsors__heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="sponsors__eyebrow">
              05 / PARTNERS
            </span>

            <h2>
              POWERING
              <span>THE RACING.</span>
            </h2>
          </div>

          <p>
            Behind every race, there are partners who
            share our passion for performance, innovation
            and motorsport.
          </p>
        </motion.div>

        {/* Sponsor grid */}
        <div className="sponsors__grid">
          {sponsors.map((sponsor, index) => (
            <motion.div
              className="sponsor-card"
              key={sponsor.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <span className="sponsor-card__number">
                0{index + 1}
              </span>

              {sponsor.logo ? (
                <motion.img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.1,
                  }}
                />
              ) : (
                <motion.span
                  className="sponsor-card__placeholder"
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.1,
                  }}
                >
                  {sponsor.name}
                </motion.span>
              )}

              <span className="sponsor-card__tier">
                {sponsor.tier}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="sponsors__cta"
          initial={{
            opacity: 0,
            y: 50,
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
            delay: 0.2,
          }}
        >
          <div>
            <span>INTERESTED IN PARTNERING?</span>

            <h3>
              LET'S BUILD
              <span>THE FUTURE.</span>
            </h3>
          </div>

          <motion.a
            href="/contact"
            className="sponsors__button"
            whileHover={{
              x: 5,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            Become a Partner
            <ArrowUpRight size={19} />
          </motion.a>
        </motion.div>

        {/* Footer line */}
        <motion.div
          className="sponsors__footer"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
        >
          <span>VMLG MOTOR SPORTS</span>
          <span>BUILT TOGETHER</span>
        </motion.div>

      </div>
    </section>
  );
};

export default Sponsors;
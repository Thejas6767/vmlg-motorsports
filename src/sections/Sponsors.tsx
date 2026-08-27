import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { sponsors } from "../data/sponsors";
import "./Sponsors.css";

const Sponsors = () => {
  const sectionRef = useRef<HTMLElement>(null);

 useLayoutEffect(() => {
  const section = sectionRef.current;

  if (!section) return;

  const ctx = gsap.context(() => {
    const cards = gsap.utils.toArray<HTMLElement>(
      ".sponsor-card"
    );

    gsap.fromTo(
      cards,
      {
        y: 45,
        opacity: 0.15,
        clipPath: "inset(75% 0 0 0)",
      },
      {
        y: 0,
        opacity: 1,
        clipPath: "inset(0% 0 0 0)",
        stagger: {
          each: 0.12,
          from: "start",
        },
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 25%",
          scrub: 1.2,
        },
      }
    );
const cta = section.querySelector(".sponsors__cta");

if (cta) {
  gsap.fromTo(
    cta,
    {
      clipPath: "inset(45% 0 0 0)",
      y: 50,
    },
    {
      clipPath: "inset(0% 0 0 0)",
      y: 0,
      ease: "none",
      scrollTrigger: {
  trigger: section,
  start: "top 95%",
  end: "bottom 25%",
  scrub: 1,
},
    }
  );
}
const ctaTitle = section.querySelector(".sponsors__cta h3");
const ctaLabel = section.querySelector(".sponsors__cta > div > span");
const ctaButton = section.querySelector(".sponsors__button");

if (ctaTitle && ctaLabel && ctaButton) {
  const ctaTimeline = gsap.timeline({
   scrollTrigger: {
  trigger: section,
  start: "top 95%",
  end: "bottom 45%",
  scrub: 1,
},
  });

  ctaTimeline
    .fromTo(
      ctaLabel,
      {
        x: -80,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "power3.out",
      }
    )
    .fromTo(
      ctaTitle,
      {
        x: 120,
        opacity: 0,
        scale: 0.92,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        ease: "power3.out",
      },
      "-=0.5"
    )
    .fromTo(
      ctaButton,
      {
        x: 100,
        opacity: 0,
        scale: 0.85,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        ease: "back.out(1.4)",
      },
      "-=0.35"
    );
}
  }, section);

  return () => ctx.revert();
}, []);

  return (
    <section
      ref={sectionRef}
      className="sponsors"
    >
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
       <motion.div className="sponsors__cta">
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
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { mediaItems } from "../data/media";

import image1 from "../assets/images/motocross-start.avif";
import image2 from "../assets/images/motocross-jump.avif";
import image3 from "../assets/images/race-karting.avif";
import image4 from "../assets/images/rally-car.avif";
import videoPoster from "../assets/images/rally-truck.avif";
import "./Gallery.css";
gsap.registerPlugin(ScrollTrigger);
const mediaImages = [
  image1,
  image2,
  image3,
  image4,
  videoPoster,
];

const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(
        ".gallery-card"
      );

      cards.forEach((card, index) => {
        const movement =
          index % 2 === 0 ? -70 : 70;

        gsap.fromTo(
          card,
          {
            y: movement,
          },
          {
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              end: "bottom 30%",
              scrub: 1.5,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="gallery"
    >
      <div className="gallery__container">

        {/* Heading */}
        <motion.div
          className="gallery__heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="gallery__eyebrow">
              04 / MEDIA
            </span>

            <h2>
              FROM THE
              <span>TRACK.</span>
            </h2>
          </div>

          <p>
            Explore the moments, machines and people
            that make VMLG motorsport what it is.
          </p>
        </motion.div>

        {/* Media grid */}
        <div className="gallery__grid">

          {mediaItems.map((item, index) => (
            <motion.article
              className={`gallery-card gallery-card--${index + 1}`}
              key={item.id}
              initial={{
                opacity: 0,
                y: 60,
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

              <motion.div
                className="gallery-card__image"
                initial={{
                  scale: 1.05,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.1,
                }}
              >

                <img
                  src={mediaImages[index]}
                  alt={item.title}
                />

                
                <div className="gallery-card__overlay" />

                <span className="gallery-card__number">
                  0{index + 1}
                </span>

                <span className="gallery-card__type">
                  {item.type === "video"
                    ? "VIDEO"
                    : item.category}
                </span>

              </motion.div>

              <motion.div
                className="gallery-card__content"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.25 + index * 0.1,
                }}
              >
                <h3>{item.title}</h3>

                <ArrowUpRight size={20} />
              </motion.div>

            </motion.article>
          ))}

        </div>

        {/* Footer */}
        <motion.div
          className="gallery__footer"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
        >
          <span>
            VMLG MOTOR SPORTS
          </span>

          <motion.a
            href="/gallery"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.97 }}
          >
            VIEW FULL GALLERY
            <ArrowUpRight size={17} />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Gallery;
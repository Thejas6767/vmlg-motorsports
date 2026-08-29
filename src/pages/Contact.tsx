import {
  ArrowUpRight,
  Camera,
  Mail,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { contactContent } from "../data/contact";
import contactBike from "../assets/images/contact-bike.jpg";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const pageRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
  const page = pageRef.current;

  if (!page) return;

  const ctx = gsap.context(() => {
    const hero = page.querySelector(".contact-page__hero");
    const image = page.querySelector(".contact-page__hero-image");
    const eyebrow = page.querySelector(".contact-page__eyebrow");
    const description = page.querySelector(".contact-page__hero p");

    if (!hero || !image || !eyebrow || !description) return;

    const timeline = gsap.timeline({
      defaults: {
        ease: "power4.out",
      },
    });

    timeline
      .fromTo(
        eyebrow,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        }
      )
      .fromTo(
        image,
        {
          opacity: 0,
          clipPath: "inset(0 100% 0 0)",
          scale: 1.15,
        },
        {
          opacity: 1,
          clipPath: "inset(0 0% 0 0)",
          scale: 1,
          duration: 1.4,
        },
        "-=0.2"
      )
      .fromTo(
        description,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.7"
      );
  }, page);
const content = page.querySelector(".contact-page__content");
const info = page.querySelector(".contact-page__info");
const details = page.querySelectorAll(".contact-detail");
const form = page.querySelector(".contact-page__form");

if (content && info && form) {
  const contentTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: content,
      start: "top 75%",
      end: "top 35%",
      scrub: 1,
    },
  });

  contentTimeline
    .fromTo(
      info,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "power3.out",
      }
    )
    .fromTo(
      details,
      {
        x: -60,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.12,
        ease: "power3.out",
      },
      "-=0.5"
    )
    .fromTo(
      form,
      {
        x: 120,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "power3.out",
      },
      "-=0.7"
    );
}
const finalCta = page.querySelector(".contact-page__cta");
const finalLabel = finalCta?.querySelector("span");
const finalTitle = finalCta?.querySelector("h2");
const finalButton = finalCta?.querySelector(
  ".contact-page__website"
);

if (finalCta && finalLabel && finalTitle && finalButton) {
  const finalTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: finalCta,
      start: "top 80%",
      end: "top 35%",
      scrub: 1,
    },
  });

  finalTimeline
    .fromTo(
      finalLabel,
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
      }
    )
    .fromTo(
      finalTitle,
      {
        opacity: 0,
        y: 100,
        skewY: 4,
      },
      {
        opacity: 1,
        y: 0,
        skewY: 0,
        ease: "power4.out",
      },
      "-=0.5"
    )
    .fromTo(
      finalButton,
      {
        opacity: 0,
        scale: 0.8,
        x: 80,
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        ease: "back.out(1.5)",
      },
      "-=0.35"
    );
}
  return () => ctx.revert();
}, []);

  return (
    <main
      ref={pageRef}
      className="contact-page"
    >

      {/* HERO */}
      <section className="contact-page__hero">
        <div className="contact-page__container">

          <span className="contact-page__eyebrow">
            {contactContent.eyebrow}
          </span>

         <motion.h1
  initial="hidden"
  animate="show"
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.16,
      },
    },
  }}
>
  <motion.span
    className="contact-word contact-word--black"
    variants={{
      hidden: {
        opacity: 0,
        y: 60,
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: "easeOut",
        },
      },
    }}
  >
    LET'S
  </motion.span>

  <motion.span
    className="contact-word contact-word--white"
    variants={{
      hidden: {
        opacity: 0,
        y: 60,
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: "easeOut",
        },
      },
    }}
  >
    TALK.
  </motion.span>
</motion.h1>

          <p>
            {contactContent.description}
          </p>
<motion.img
  className="contact-page__hero-image"
  src={contactBike}
  alt="Motocross rider"
  aria-hidden="true"
/>
        </div>
      </section>

      {/* CONTACT AREA */}
      <section className="contact-page__content">
        <div className="contact-page__container">

          <div className="contact-page__grid">

            {/* INFO */}
            <div className="contact-page__info">

              <span className="contact-page__label">
                GET IN TOUCH
              </span>

              <h2>
                START THE
                <span>CONVERSATION.</span>
              </h2>

              <div className="contact-page__details">

                <div className="contact-detail">
                  <div className="contact-detail__icon">
                    <Mail size={19} />
                  </div>

                  <div>
                    <span>EMAIL</span>

                    <a href={`mailto:${contactContent.email}`}>
                      {contactContent.email}
                    </a>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail__icon">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <span>LOCATION</span>
                    <strong>
                      {contactContent.location}
                    </strong>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail__icon">
                    <Camera size={19} />
                  </div>

                  <div>
                    <span>INSTAGRAM</span>

                    <a
                      href={contactContent.instagram}
                      target="_blank"
                      rel="noreferrer"
                    >
                      @vamcymerlamotorsports
                    </a>
                  </div>
                </div>

              </div>

            </div>

            {/* FORM */}
            <form
              className="contact-page__form"
              onSubmit={(event) => event.preventDefault()}
            >

              <div className="contact-page__form-header">
                <span>01 / SEND AN ENQUIRY</span>
              </div>

              <div className="contact-page__field">
                <label htmlFor="name">
                  NAME
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="contact-page__field">
                <label htmlFor="email">
                  EMAIL
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="contact-page__field">
                <label htmlFor="phone">
                  PHONE
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="+91"
                />
              </div>

              <div className="contact-page__field">
                <label htmlFor="subject">
                  SUBJECT
                </label>

                <select
                  id="subject"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an enquiry type
                  </option>

                  <option value="event">
                    Event Enquiry
                  </option>

                  <option value="partnership">
                    Partnership
                  </option>

                  <option value="racing">
                    Racing
                  </option>

                  <option value="general">
                    General Enquiry
                  </option>
                </select>
              </div>

              <div className="contact-page__field">
                <label htmlFor="message">
                  MESSAGE
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us how we can help..."
                  required
                />
              </div>

              <button
                type="submit"
                className="contact-page__submit"
              >
                SEND ENQUIRY
                <ArrowUpRight size={20} />
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="contact-page__cta">
        <div className="contact-page__container">

          <span>
            VMLG MOTOR SPORTS
          </span>

          <h2>
            SEE YOU
            <span>AT THE TRACK.</span>
          </h2>

        </div>
      </section>

    </main>
  );
};

export default Contact;
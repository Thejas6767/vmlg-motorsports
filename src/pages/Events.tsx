import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { upcomingEvent } from "../data/events";
import eventImage from "../assets/images/race-car.avif";
import bikeJump from "../assets/images/bike-jump-transparent.png";
import bornToRace from "../assets/images/34e54e0d-aad0-49d8-b689-ec482a27d12a.png";
import racingX from "../assets/images/x.png";
import checkeredFlag from "../assets/images/flag.png";
import type { CSSProperties } from "react";
import "./Events.css";

gsap.registerPlugin(ScrollTrigger);
const Events = () => {
  const event = upcomingEvent;
  const pageRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const ctx = gsap.context(() => {
      const eventCard = page.querySelector(".event-row--image");
      const eventContent = page.querySelector(".event-row__content");
      const eventInfo = page.querySelector(".event-row__info");
      const eventDate = page.querySelector(".event-row__date");
      const eventButton = page.querySelector(".event-row__link");

      if (
        !eventCard ||
        !eventContent ||
        !eventInfo ||
        !eventDate ||
        !eventButton
      ) {
        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: eventCard,
          start: "top 90%",
          end: "top 40%",
          scrub: 1.5,
        },
      });

      timeline
        .fromTo(
          eventCard,
          {
            clipPath: "inset(0 0 100% 0)",
            scale: 0.88,
          },
          {
            clipPath: "inset(0 0 0% 0)",
            scale: 1,
            ease: "power3.out",
          }
        )
        .fromTo(
          eventInfo,
          {
            x: -120,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            ease: "power3.out",
          },
          "-=0.55"
        )
        .fromTo(
          eventDate,
          {
            x: 100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .fromTo(
          eventButton,
          {
            x: 120,
            scale: 0.75,
            opacity: 0,
          },
          {
            x: 0,
            scale: 1,
            opacity: 1,
            ease: "back.out(1.5)",
          },
          "-=0.4"
        );

      gsap.fromTo(
        eventCard,
        {
          "--event-zoom": 1.2,
        },
        {
          "--event-zoom": 1,
          ease: "none",
          scrollTrigger: {
            trigger: eventCard,
            start: "top 90%",
            end: "top 30%",
            scrub: 2,
          },
        }
      );
    }, page);

    return () => ctx.revert();
  }, []);

  return (
 <main
  ref={pageRef}
  className="events-page"
>

     
     {/* HERO */}
<section className="events-page__hero">
  <div className="events-page__container">

    <div className="events-page__hero-content">

      <span className="events-page__eyebrow">
        01 / VMLG MOTOR SPORTS
      </span>

      <h1>
        UPCOMING
        <span>EVENTS.</span>
      </h1>

      <p>
        Discover upcoming races, competitions and
        motorsport experiences from VMLG.
      </p>

    </div>

  <motion.img
  src={bikeJump}
  alt="Motocross rider jumping"
  className="events-page__hero-image"
  initial={{
    opacity: 0,
    x: 180,
    rotate: 8,
    scale: 1.15,
  }}
  animate={{
    opacity: 1,
    x: 0,
    rotate: -3,
    scale: 1,
  }}
  transition={{
    duration: 1.2,
    delay: 0.25,
    ease: [0.16, 1, 0.3, 1],
  }}
/>
  <motion.img
  src={bornToRace}
  alt="Born to Race"
  className="events-page__sticker events-page__sticker--born"
  initial={{ opacity: 0, scale: 0, rotate: -35 }}
  animate={{ opacity: 1, scale: 1, rotate: -8 }}
  transition={{
    duration: 0.7,
    delay: 0.8,
    type: "spring",
    stiffness: 180,
  }}
/>

<motion.img
  src={racingX}
  alt=""
  className="events-page__sticker events-page__sticker--x"
  initial={{ opacity: 0, scale: 0, rotate: 30 }}
  animate={{ opacity: 1, scale: 1, rotate: -12 }}
  transition={{
    duration: 0.6,
    delay: 1,
    type: "spring",
    stiffness: 200,
  }}
/>

<motion.img
  src={checkeredFlag}
  alt=""
  className="events-page__sticker events-page__sticker--flag"
  initial={{ opacity: 0, scale: 0, rotate: 35 }}
  animate={{ opacity: 1, scale: 1, rotate: 8 }}
  transition={{
    duration: 0.6,
    delay: 1.1,
    type: "spring",
    stiffness: 200,
  }}
/>

  </div>
</section>

      {/* EVENT LIST */}
      <section className="events-page__list">
        <div className="events-page__container">

          <div className="events-page__list-header">
            <span>EVENT CALENDAR</span>
            <span>01 EVENT</span>
          </div>

         <article
  className="event-row event-row--image"
  
  style={
    {
      "--event-image": `url(${eventImage})`,
    } as CSSProperties
  }
  
>

            {/* DARK OVERLAY */}
            <div className="event-row__overlay" />

            {/* CONTENT */}
            <div className="event-row__content">

              {/* NUMBER */}
              <div className="event-row__number">
                01
              </div>

              {/* DATE */}
              <div className="event-row__date">
                <CalendarDays size={20} />

                <div>
                  <strong>
                    {event.date}
                  </strong>

                  <span>
                    {event.round}
                  </span>
                </div>
              </div>

              {/* EVENT INFO */}
              <div className="event-row__info">

                <span>
                  {event.status === "upcoming"
                    ? "UPCOMING EVENT"
                    : "COMPLETED EVENT"}
                </span>

                <h2>
                  {event.title}
                </h2>

                <div className="event-row__location">
                  <MapPin size={15} />
                  {event.location}
                </div>

                <p>
                  {event.description}
                </p>

              </div>

              {/* ACTION */}
              <a
                href="/contact"
                className="event-row__link"
              >
                <span>ENQUIRE</span>
                <ArrowUpRight size={21} />
              </a>

            </div>

          </article>

        </div>
      </section>

    </main>
  );
};

export default Events;
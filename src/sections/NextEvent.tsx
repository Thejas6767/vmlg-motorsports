import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

import { upcomingEvent } from "../data/events";
import eventImage from "../assets/images/motocross-air.avif";
import "./NextEvent.css";

const NextEvent = () => {
  return (
    <section className="next-event">
      <div className="next-event__container">

        {/* Section heading */}
        <motion.div
          className="next-event__heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="next-event__eyebrow">
              01 / UPCOMING
            </span>

            <h2>
              NEXT
              <span>EVENT.</span>
            </h2>
          </div>

          <p className="next-event__intro">
            The next chapter of VMLG motorsport is waiting.
            Stay tuned for the latest race announcements,
            events and championship action.
          </p>
        </motion.div>

        {/* Event card */}
        <motion.div
          className="next-event__card"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: "easeOut",
          }}
        >

          {/* Image */}
          <motion.div
            className="next-event__image"
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img
              src={eventImage}
              alt="VMLG Motorsport event"
            />

            <div className="next-event__round">
              {upcomingEvent.round}
            </div>

            <div className="next-event__image-label">
              VMLG MOTOR SPORTS
            </div>
          </motion.div>

          {/* Information */}
          <motion.div
            className="next-event__info"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
          >

            <div className="next-event__status">
              <span />
              UPCOMING EVENT
            </div>

            <h3>{upcomingEvent.title}</h3>

            <p className="next-event__description">
              {upcomingEvent.description}
            </p>

            <div className="next-event__details">

              <motion.div
                className="next-event__detail"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <CalendarDays size={21} />

                <div>
                  <small>DATE</small>
                  <strong>
                    {upcomingEvent.date}
                  </strong>
                </div>
              </motion.div>

              <motion.div
                className="next-event__detail"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <MapPin size={21} />

                <div>
                  <small>LOCATION</small>
                  <strong>
                    {upcomingEvent.location}
                  </strong>
                </div>
              </motion.div>

            </div>

            <motion.a
              href="/events"
              className="next-event__button"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.97 }}
            >
              View All Events
              <ArrowUpRight size={19} />
            </motion.a>

          </motion.div>

        </motion.div>

        {/* Bottom line */}
        <motion.div
          className="next-event__footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span>VMLG MOTOR SPORTS</span>
          <span>RACE • COMPETE • CONQUER</span>
        </motion.div>

      </div>
    </section>
  );
};

export default NextEvent;
import {
  ArrowUpRight,
  Camera,
  Mail,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { contactContent } from "../data/contact";
import contactBike from "../assets/images/contact-bike.jpg";
import "./Contact.css";

const Contact = () => {
  return (
    <main className="contact-page">

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
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    duration: 1,
    delay: 0.35,
    ease: "easeOut",
  }}
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

          <a
            href={contactContent.website}
            target="_blank"
            rel="noreferrer"
            className="contact-page__website"
          >
            Visit VMLG
            <ArrowUpRight size={19} />
          </a>

        </div>
      </section>

    </main>
  );
};

export default Contact;
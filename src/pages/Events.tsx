import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { upcomingEvent } from "../data/events";
import eventImage from "../assets/images/race-car.avif";
import type { CSSProperties } from "react";
import "./Events.css";

const Events = () => {
  const event = upcomingEvent;

  return (
    <main className="events-page">

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
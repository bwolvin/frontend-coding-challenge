import React from "react";
import "./cards.component.sass";

const WhatsHappeningSection = () => {
  const events = [
    {
      id: 1,
      image: "./allbaysimg.jpg",
      title: "LIMITED TIME GIFT CARD OFFER",
      details:
        "Enjoy 20% off all gift cards purchased online from March 28-31! Do not wait - this offer will not stick around forever.",
      link: "/event1",
    },
    {
      id: 2,
      image: "./bayImg.jpg",
      title: "HALF-OFF GOLF EVERY TUESDAY",
      details:
        "Every Tuesday, there is a 100% chance you get 50% off the golf. Valid for walk in, app, and website bookings. Exclusions apply.",
      link: "/event2",
    },
    {
      id: 3,
      image: "mobileapp.jpg",
      title: "GET THE APP, GET HALF OFF",
      details:
        "Get half-off game play Monday-Wednesday when you make a reservation in the app. Restrictions and exclusions may apply",
      link: "/event3",
    },
  ];

  return (
    <div>
      <div className="section-header">
        <p className="section-text">Events and Promotions</p>
        <h2 className="section-title">WHAT&apos;S HAPPENING</h2>
        <hr className="line" />
      </div>
      {/* map through each event to place on cards */}
      <div className="card-container">
        {events.map((event) => (
          <div key={event.id} className="card">
            <img src={event.image} alt={event.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">
                {event.title}
                <i className="right-arrow fas fa-chevron-right"></i>
              </h3>
              <p className="card-details">{event.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatsHappeningSection;

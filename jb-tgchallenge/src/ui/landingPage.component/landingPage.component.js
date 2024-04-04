import React from "react";
import "./landingPage.component.sass";
import WhatsHappeningSection from "../cards.component/cards.component";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero section with video background */}
      <div className="hero-section">
        <video autoPlay muted loop className="video-background">
          <source src="./homeVideo.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <h2>IT&apos;S MORE THAN JUST GOLF.</h2>
          <h1>IT&apos;S TOPGOLF</h1>
        </div>
      </div>
      {/* Events section*/}
      <WhatsHappeningSection />
    </div>
  );
};

export default LandingPage;

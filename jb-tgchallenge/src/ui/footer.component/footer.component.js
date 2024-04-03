import React from "react";
import "./footer.component.sass"; // Import your Sass file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>About Us</h3>
            <p>
              So what is Topgolf? In short, we’re a sports entertainment complex
              that features an inclusive, high-tech golf game that everyone can
              enjoy, paired with an outstanding food and beverage menu,
              climate-controlled hitting bays and music. Every Topgolf has an
              energetic hum that you can feel right when you walk through the
              door.
            </p>
          </div>
          <div className="col">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <i className="fab fa-facebook-f icon"></i>
              <i className="fab fa-twitter icon"></i>
              <i className="fab fa-instagram icon"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

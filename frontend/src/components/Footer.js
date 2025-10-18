import React from "react";
import { Facebook, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import final_map from "../final_map.png"
import "../styles/Footer.css";
// import '../../public/Map.png';
const Footer = () => {
  return (
    <footer className={`footer`}>
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>MLS&Co</h3>
            <p>
              A legacy of legal excellence since 1896. We provide comprehensive
              legal solutions with integrity and a commitment to success.
            </p>
            <div className="footer-social">
              <Facebook className="footer-social-icon" />
              <Twitter className="footer-social-icon" />
              <Linkedin className="footer-social-icon" />
            </div>
          </div>
          <div className="footer-section abbrcard">
            <h4 className="abbr">
              <span className="M">M</span>ahdsbjfb
            </h4>
            <ul className="footer-links">
              <li>
                <a href="#firm">Our Firm</a>
              </li>
              <li>
                <a href="#legacy">Our Legacy</a>
              </li>
              <li>
                <a href="#people">Our People</a>
              </li>
              <li>
                <a href="#awards">Awards</a>
              </li>
            </ul>
          </div>
          <div className="footer-section abbrcard">
            <h4 className="abbr">
              <span className="M">L</span>qwerty
            </h4>
            <ul className="footer-links">
              <li>
                <a href="#corporate">Corporate</a>
              </li>
              <li>
                <a href="#dispute">Dispute Resolution</a>
              </li>
              <li>
                <a href="#ip">Intellectual Property</a>
              </li>
              <li>
                <a href="#realestate">Real Estate</a>
              </li>
            </ul>
          </div>
          <div className="footer-section abbrcard">
            <h4 className="abbr">
              <span className="M">S</span>qwerty
            </h4>
            <ul className="footer-links">
              <li>
                <a href="#articles">Articles</a>
              </li>
              <li>
                <a href="#newsletters">Newsletters</a>
              </li>
              <li>
                <a href="#publications">Publications</a>
              </li>
              <li>
                <a href="#events">Events</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-contact-section">
          <h4>CONTACT US</h4>
          <div className="footer-contact-wrapper">
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin size={20} className="footer-contact-icon" />
                <span>
                  D.No. 12-203/6/2/57, 2nd floor, MLS Avenue, near Rainbow
                  villas, Navodaya colony, Tadepalli, Guntur district
                </span>
              </div>
              <div className="footer-contact-item">
                <Phone size={20} className="footer-contact-icon" />
                <span>+91 7989879735</span>
              </div>
              <div className="footer-contact-item">
                <Mail size={20} className="footer-contact-icon" />
                <span>abcd@gmail.com</span>
              </div>
            </div>
            <div className="map-image">
              {/* Added target="_blank" and rel="noopener noreferrer" */}
              <a
                href="https://maps.app.goo.gl/SpJhoJyydbWDTvJm6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={final_map} alt="Map of Firm" className="map" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

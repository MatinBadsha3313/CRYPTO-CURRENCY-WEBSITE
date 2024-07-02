import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="footer-section section">
        <div className="container footer-container">
          <div className="address-container">
            <h4>Address</h4>
            <div className="contact-box">
              <a href="#">
                <FaLocationDot />
                <span>Location</span>
              </a>
              <a href="#">
                <IoIosCall />
                <span>Call +01 1234567890</span>
              </a>
              <a href="#">
                <MdEmail />
                <span>demo@gmail.com</span>
              </a>
            </div>
            <div className="address-social-links-box">
              <a href="#" className="social-icons">
                <FaFacebookF />
              </a>

              <a href="#" className="social-icons">
                <FaTwitter />
              </a>
              <a href="#" className="social-icons">
                <FaLinkedinIn />
              </a>
              <a href="#" className="social-icons">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="info-container">
            <h4>Info</h4>
            <p>
              necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with a
              handful
            </p>
          </div>
          <div className="footer-links-container">
            <h4>Links</h4>
            <ul className="footer-links-items">
              <li>
                <Link to="/" className="footer-link">
                  {" "}
                  HOME
                </Link>
              </li>
              <li>
                <Link to="about" className="footer-link">
                  {" "}
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to="services" className="footer-link">
                  {" "}
                  SERVICES
                </Link>
              </li>
              <li>
                <Link to="whyus" className="footer-link">
                  {" "}
                  WHY US
                </Link>
              </li>
              <li>
                <Link to="team" className="footer-link">
                  {" "}
                  TEAM
                </Link>
              </li>
            </ul>
          </div>
          <div className="subscribe-container">
            <h4>Subscribe</h4>
            <form className="subscribe-form">
              <input type="text" placeholder="Enter email" />
              <button type="submit" className="btn" style={{ width: "100%" }}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
      {/* sub-Footer  */}
      <div className="sub-footer">
        <div className="container">
          <p>&copy; 2024 All Rights Reserved By Finexo</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

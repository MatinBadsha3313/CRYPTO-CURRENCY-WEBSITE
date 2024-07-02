import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
const CustomerSlide = () => {
  return (
    <div className="costomers-container">
      <div className="customer-card">
        <div className="customer-img-box">
          <img src="./images/client1.jpg" alt="Customer Image" />
        </div>

        <div className="customer-info-box">
          <div className="customer-info">
            <h6>LusDen</h6>
            <p>Magna aliqua. Ut</p>
          </div>
          <FaQuoteLeft className="customer-info-icon" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis{" "}
        </p>
      </div>
      <div className="customer-card">
        <div className="customer-img-box">
          <img src="./images/client2.jpg" alt="Customer Image" />
        </div>

        <div className="customer-info-box">
          <div className="customer-info">
            <h6>LusDen</h6>
            <p>Magna aliqua. Ut</p>
          </div>
          <FaQuoteLeft className="customer-info-icon" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis{" "}
        </p>
      </div>
    </div>
  );
};

export default CustomerSlide;

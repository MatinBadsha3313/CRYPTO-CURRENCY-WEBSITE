import React from "react";

const ServiceInfoCards = ({ img, name }) => {
  return (
    <div className="service-card">
      <div className="service-img">
        <img src="./images/s1.png" alt="service image" />
      </div>
      <h3>CURRENCY WALLET</h3>
      <p>
        fact that a reader will be distracted by the readable content of a page
        when looking at its layout. The point of using
      </p>
      <a href="#">Read More</a>
    </div>
  );
};

export default ServiceInfoCards;

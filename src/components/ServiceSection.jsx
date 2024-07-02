import React from "react";
import ServiceInfoCards from "../SubComponent/ServiceInfoCards";

const ServiceSection = () => {
  return (
    <section className="service-section section">
      <div className="container">
        <div className="service-section--text">
          <h2 className="heading">
            Our <span>Services</span>
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration
          </p>
        </div>

        <div className="service-card-container">
          <ServiceInfoCards name={"CURRENCY WALLET"} img={"./images/s1.png"} />
          <ServiceInfoCards name={"SECURITY STORAGE"} img={"./images/s2.png"} />
          <ServiceInfoCards name={"EXPERT SUPPORT"} img={"./images/s3.png"} />
        </div>

        <div className="service-btn">
          <a href="#" className="btn">
            View All
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

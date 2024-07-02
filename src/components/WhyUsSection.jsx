import WhyUsInfoCard from "../SubComponent/WhyUsInfoCard";

const WhyUsSection = () => {
  return (
    <section className="section  whyus-section">
      <div className="container">
        <h2 className="heading">
          Why Choose <span>Us</span>
        </h2>

        <WhyUsInfoCard name={"Expert Management"} img={"./images/w1.png"} />
        <WhyUsInfoCard name={"Secure Investment"} img={"./images/w2.png"} />
        <WhyUsInfoCard name={"Instant Trading"} img={"./images/w3.png"} />
        <WhyUsInfoCard name={"Happy Customers"} img={"./images/w4.png"} />
      </div>
      <a href="#" className="btn">
        Read more
      </a>
    </section>
  );
};

export default WhyUsSection;

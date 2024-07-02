import React from "react";

const AboutSection = () => {
  return (
    <section className="about-section section">
      <div className="container">
        <div className="about-heading-text">
          <h2 className="heading">
            About <span>Us</span>
          </h2>
          <p>
            Magni quod blanditiis non minus sed aut voluptatum illum quisquam
            aspernatur ullam vel beatae rerum ipsum voluptatibus
          </p>
        </div>

        <div className="about-content">
          <div className="about-content-img--box">
            <img src="./images/about-img.png" alt="" />
          </div>

          <div className="about-content-text">
            <h3>We Are Finexo</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All
            </p>
            <p>
              Molestiae odio earum non qui cumque provident voluptates,
              repellendus exercitationem, possimus at iste corrupti officiis
              unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab
              omnis quasi expedita.
            </p>

            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

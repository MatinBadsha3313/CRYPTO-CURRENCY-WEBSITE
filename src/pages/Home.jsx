import React, { useEffect, useRef, useState } from "react";

import ServiceSection from "../components/ServiceSection";
import AboutSection from "../components/AboutSection";
import WhyUsSection from "../components/WhyUsSection";
import TeamSection from "../components/TeamSection";
import CustomersSection from "../components/CustomersSection";
import CryptoSlides from "../components/CryptoSlides";

const slides = [1, 2, 3];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideImages = useRef([]);

  const assignRef = (el, index) => {
    slideImages.current[index] = el;
  };

  const prevButton = (index) => {
    const newIndex = index;
    slideImages.current[currentIndex].style.animation =
      "next1 0.5s ease-in forwards";
    slideImages.current[newIndex].style.animation =
      "next2 0.5s ease-in forwards";
    setCurrentIndex(newIndex);
  };

  const nextButton = (index) => {
    const newIndex = index;
    slideImages.current[currentIndex].style.animation =
      "prev1 0.5s ease-in forwards";
    slideImages.current[newIndex].style.animation =
      "prev2 0.5s ease-in forwards";
    setCurrentIndex(newIndex);
  };

  const handleDotClick = (index) => {
    if (index > currentIndex) {
      nextButton(index);
    } else {
      prevButton(index);
    }
    // setCurrentIndex(index);
    // slideImages.current.forEach((elm, idx) => {
    //   if (elm) {
    //     elm.style.animation = "";
    //   }
    // });
    // slideImages.current[index].style.animation = "next2 0.5s ease-in forwards";
  };

  useEffect(() => {
    const slideImgFun = () => {
      slideImages.current[currentIndex].style.animation =
        "next1 0.5s ease-in forwards";
      const nextIndex = (currentIndex + 1) % slides.length;
      slideImages.current[nextIndex].style.animation =
        "next2 0.5s ease-in forwards";
      setCurrentIndex(nextIndex);
    };

    const interval = setInterval(slideImgFun, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <main>
      <section className="hero-section section">
        {/* <div className="container"> */}
        {/* we can use before pseodu class or background url for this img  */}
        <div className="hero-img">
          <img src="./images/hero-bg.png" alt="hero background image" />
        </div>

        <div className="carousel-container">
          <div className="container-inner-container">
            {slides.map((_, index) => (
              <div
                className="carousel-inner"
                key={index}
                ref={(el) => assignRef(el, index)}
              >
                <CryptoSlides />
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              // onClick={() => setCurrentIndex(index)}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
        {/* </div> */}
      </section>

      {/* -----Service Section-- */}

      <ServiceSection />

      {/* -----About Us Section-- */}
      <AboutSection />

      {/* -------Why Choose Us section---- */}
      <WhyUsSection />
      {/* -------Team section---- */}
      <TeamSection />
      {/* -------Customers section---- */}

      <CustomersSection />
    </main>
  );
};

export default Home;

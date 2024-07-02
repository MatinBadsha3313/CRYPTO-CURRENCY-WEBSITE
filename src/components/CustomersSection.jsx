import React, { useEffect, useRef, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CustomerSlide from "../SubComponent/CustomerSlide";

const slides = [1, 2];
const CustomersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideImages = useRef([]);

  const assignRef = (el, index) => {
    slideImages.current[index] = el;
  };

  const prevButton = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    slideImages.current[currentIndex].style.animation =
      "next1 0.5s ease-in forwards";
    slideImages.current[newIndex].style.animation =
      "next2 0.5s ease-in forwards";
    setCurrentIndex(newIndex);
  };

  const nextButton = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    slideImages.current[currentIndex].style.animation =
      "prev1 0.5s ease-in forwards";
    slideImages.current[newIndex].style.animation =
      "prev2 0.5s ease-in forwards";
    setCurrentIndex(newIndex);
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
    <section className="customers-section section">
      <div className="container">
        <h2 className="heading">
          What says our <span>Customers</span>
        </h2>

        {/* <div className="customer-carousel-container"> */}
        <div className="customer-inner-container">
          {slides.map((_, index) => (
            <div
              className="carousel-inner"
              key={index}
              ref={(el) => assignRef(el, index)}
            >
              <CustomerSlide />
            </div>
          ))}
        </div>
        {/* </div> */}
        <div className="customer-card-arrow-container">
          <button type="button" onClick={() => prevButton()}>
            <IoIosArrowBack />
          </button>
          <button type="button" onClick={() => nextButton()}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomersSection;

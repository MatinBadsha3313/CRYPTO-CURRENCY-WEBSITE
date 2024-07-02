import React from "react";
import { Link } from "react-router-dom";

const CryptoSlides = () => {
  return (
    <div className="slide">
      <div className="slide-text">
        <h1>
          Crypto <br />
          Currency
        </h1>
        <p>
          Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam
          fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat
          molestias, veniam, vel architecto veritatis delectus repellat modi
          impedit sequi.
        </p>

        <Link className="btn">Read More</Link>
      </div>

      <div className="slide-img">
        <img src="./images/slider-img.png" alt="" />
      </div>
    </div>
  );
};

export default CryptoSlides;

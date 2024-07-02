import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const TeamInfoCards = ({ name, img }) => {
  return (
    <div className="team-card">
      <div className="team-card-img-box">
        <img src={img} alt="Team imge" />
      </div>
      <h4>{name}</h4>
      <h5>Marketing Head</h5>

      <div className="social-links">
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
        <a href="#" className="social-icons">
          <FaYoutube />
        </a>
      </div>
    </div>
  );
};

export default TeamInfoCards;

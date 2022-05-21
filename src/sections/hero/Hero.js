import "./hero.css";
import profile from "../../assets/profile.jpg";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Hero = () => {
  const theme = useContext(ThemeContext);
  const night = theme.state.nightMode;

  return (
    <div className="hero" style={{ background: night && "#222222" }}>
      <div
        className="custom-shape-divider-bottom-1650973913"
        style={{ display: night && "none" }}
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="hero-left">
        <div className="hero-left-wrapper">
          <h2 className="hero-intro">Hi, my name is</h2>
          <h1 className="hero-name">Jane Doe</h1>

          <div className="hero-description">
            I design and develop professional stylish and mordern applications
            for clients of all sizes using ReactJS, React Native, NodeJS or
            WordPress.
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-right-img">
          <img src={profile} alt="profile" className="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

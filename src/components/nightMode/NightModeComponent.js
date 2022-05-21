import { useContext } from "react";
import "./nightMode.css";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { ThemeContext } from "../../context";

const NightModeComponent = () => {
  const theme = useContext(ThemeContext);
  const night = theme.state.nightMode;

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="toggle">
      <BsFillSunFill color="#FDB813" className="toggle-icon" />
      <BsFillMoonFill color="#1b1e23" className="toggle-icon" />
      <div
        style={{ left: night ? "0px" : "25px" }}
        className="toggle-button"
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default NightModeComponent;

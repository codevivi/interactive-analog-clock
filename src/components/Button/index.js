//import { Link } from "react-router-dom";
import "./index.css";
const Button = ({
  isLink = false,
  handleClick = null,
  icon = null,
  text = "",
  addPosClass = "",
  styling = "normal",
  large = false,
}) => {
  let buttonText = null;
  let buttonIcon = null;
  if (styling === "normal") {
    addPosClass += " button--normal";
  } else if (styling === "info") {
    addPosClass += " button--info";
  } else if (styling === "close") {
    addPosClass += " button--close";
  }
  if (large) {
    addPosClass += " button--large";
  }
  if (text) {
    buttonText = <small className="button__text">{text}</small>;
  }
  if (icon) {
    buttonIcon = <img className="button__icon" src={icon} alt="ikona" />;
  }
  return (
    <div>
      {!isLink && (
        <button onClick={handleClick} className={`button ${addPosClass}`}>
          {buttonIcon}
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Button;

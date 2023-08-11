//import { Link } from "react-router-dom";
import "./index.css";
const Button = ({ isLink = false, handleClick = null, icon = null, text = "", addPosClass = "", styling = "normal", iconText = "ikona", large = false, tooltip = false, tooltipText = "" }) => {
  let buttonText = null;
  let buttonIcon = null;
  let allClassNames = addPosClass;

  if (styling === "info") {
    allClassNames += " button--info";
  } else if (styling === "danger") {
    allClassNames += " button--danger";
  }
  if (large) {
    allClassNames += " button--large";
  }
  if (text) {
    buttonText = <small className="button__text">{text}</small>;
  }
  if (tooltip) {
    allClassNames += " tooltip";
  }
  if (icon) {
    buttonIcon = <img className="button__icon" width="24" height="24" src={icon} alt={iconText} />;
  }
  return (
    <div>
      {!isLink && (
        <button onClick={handleClick} className={`button ${allClassNames}`}>
          {buttonIcon}
          {buttonText}
          {tooltip && <span className="tooltip-text">{tooltipText}</span>}
        </button>
      )}
    </div>
  );
};

export default Button;

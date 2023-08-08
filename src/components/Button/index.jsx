//import { Link } from "react-router-dom";
import "./index.css";
const Button = ({ isLink = false, handleClick = null, icon = null, text = "", addPosClass = "", styling = "normal", large = false, tooltip = false, tooltipText = "" }) => {
  let buttonText = null;
  let buttonIcon = null;
  let allClassNames = addPosClass;
  if (styling === "normal") {
    allClassNames += " button--normal";
  } else if (styling === "info") {
    allClassNames += " button--info";
  } else if (styling === "close") {
    allClassNames += " button--close";
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
    buttonIcon = <img className="button__icon" width="24" height="24" src={icon} alt="ikona" />;
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

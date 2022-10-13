import "./style.css";

import girl from "../../resources/img/girl.svg";
const ClockContainer = ({ children }) => {
  return (
    <div draggable="false" className="clock-container">
      <img className="girl" src={girl} width="100" alt="" />
      {children}
    </div>
  );
};
export default ClockContainer;

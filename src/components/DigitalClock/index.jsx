import { useContext } from "react";
import "./style.css";
import { SettingsCtx } from "../../context/SettingsCtx";
import { TimeCtx } from "../../context/TimeCtx";

const DigitalClock = () => {
  const { isInteractive, isHourFormat12 } = useContext(SettingsCtx);
  const { seconds, minutes, hours } = useContext(TimeCtx);
  function pad2(n) {
    let str = "" + n;
    if (str.length < 2) {
      str = "0" + str;
    }
    return str;
  }
  function formatDigitalHour(num) {
    if (isHourFormat12) {
      if (num > 12) {
        num = num - 12;
      }
    }
    return num;
  }
  return (
    <p className="digital unselectable" onMouseOver={(e) => e.stopPropagation()}>
      <small className="digital__hours-display">{pad2(formatDigitalHour(hours))}:</small>
      <small className="digital__minutes-display">{pad2(minutes)}</small>
      {!isInteractive && <small className="digital__seconds-display">:{pad2(seconds)}</small>}
    </p>
  );
};
export default DigitalClock;

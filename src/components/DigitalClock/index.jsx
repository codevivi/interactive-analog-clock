import { useContext } from "react";
import "./style.css";
import { SettingsCtx } from "../../context/SettingsCtx";
import { TimeCtx } from "../../context/TimeCtx";

function formatTimeToString(n) {
  let str = "" + n;
  if (str.length < 2) {
    str = "0" + str;
  }
  return str;
}
function formatDigitalHour(num, isHourFormat12) {
  if (isHourFormat12) {
    if (num > 12) {
      num = num - 12;
    }
  }
  return num;
}

const DigitalClock = () => {
  const { isInteractive, isHourFormat12 } = useContext(SettingsCtx);
  const { seconds, minutes, hours } = useContext(TimeCtx);

  return (
    <p className="digital unselectable" onMouseOver={(e) => e.stopPropagation()}>
      <small className="digital__hours-display">{formatTimeToString(formatDigitalHour(hours, isHourFormat12))}:</small>
      <small className="digital__minutes-display">{formatTimeToString(minutes)}</small>
      {!isInteractive && <small className="digital__seconds-display">:{formatTimeToString(seconds)}</small>}
    </p>
  );
};
export default DigitalClock;
